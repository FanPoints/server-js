import FanPointsClient from './FanPointsClient';
import {
    Currency,
    ShopItemCategory,
    ShopItemDistributionType,
} from './queries/generated/sdk';
import { unwrap } from './utils/errors';

export type PurchaseShopItem = {
    shopItemType: ShopItemCategory;
    title: string;
    description: string;
    imageUrls: string[];
    shopItemDistributionType: ShopItemDistributionType;
    rewardId: string;
    currency: Currency;
    price: number;
};
export type LotteryShopItem = {
    shopItemType: ShopItemCategory;
    title: string;
    description: string;
    imageUrls: string[];
    shopItemDistributionType: ShopItemDistributionType;
    rewardId: string;
    currency: Currency;
    ticketPrice: number;
    numPrizesAvailable: number;
};
export type BiddingShopItem = {
    shopItemType: ShopItemCategory;
    title: string;
    description: string;
    imageUrls: string[];
    shopItemDistributionType: ShopItemDistributionType;
    rewardId: string;
    currency: Currency;
    minBid: number;
};

export type ShopItemListing = {
    rewardId: string;
    numAvailable: number;
    partnerId: string;
    shopItem: PurchaseShopItem | LotteryShopItem | BiddingShopItem;
};

export type ShopItemPurchase = {
    shopItem: PurchaseShopItem;
    groupId: string;
    nr: number;
    deliveryDetails: {
        deliveryAddress: {
            zipCode: string;
            street: string;
            country: string;
            city: string;
        };
        deliveryName: string;
    };
    purchaseDate: string;
};

/**
 * This class allows you to display the items in the shop, to purchase
 * shop items and lottery tickets and to place bids. Furthermore, it
 * allows to retrieve purchases done by the user.
 */
export class ShopModule {
    /** @hidden */
    constructor(private client: FanPointsClient) {}

    /**
     * Returns the items listed in the shop of the loyalty program.
     *
     * The items can be filtered by category. Use `limit` and `lastReturnedRewardId`
     * to paginate the results.
     *
     * @param shopItemCategory - The category of the items to return. If not specified,
     * all items will be returned.
     * @param limit - The maximum number of items to return. If not specified, all items
     * will be returned.
     * @param lastReturnedRewardId - The reward ID of the last returned item. If not specified,
     * the first items will be returned.
     */
    public async getShopItems(
        shopItemCategory?: ShopItemCategory,
        limit?: number,
        lastReturnedRewardId?: string,
    ) {
        const { sdk, loyaltyProgramId } = this.client.getLoyaltyProgram();
        const result = await sdk.getShopItems({
            projectId: loyaltyProgramId,
            shopItemCategory,
            limit,
            lastReturnedRewardId,
        });

        return result.data.getShopItems.result as ShopItemListing[];
    }

    /**
     * Returns the given shop item.
     *
     * @param rewardId - The reward ID of the item to return.
     * @param limit - The ID of the partner offering the item.
     *
     * @throws {@link RequestError} if the item does not exist (`unknownShopItemError`).
     */
    public async getShopItem(rewardId: string, partnerId: string) {
        const { sdk, loyaltyProgramId } = this.client.getLoyaltyProgram();
        const result = await sdk.getShopItem({
            projectId: loyaltyProgramId,
            rewardId,
            partnerId,
        });

        return unwrap({
            result: result.data.getShopItem.result as ShopItemListing,
            errors: result.data.getShopItem.errors,
        });
    }

    /**
     * Returns the purchases of a user in your shop.
     *
     * @param userId - The user ID of the user.
     * @param limit - The maximum number of items to return. If not specified, all items
     * will be returned.
     * @param earlierThan - A timestamp in timezone-aware ISO 8601 format. If specified,
     * only purchases made before the given timestamp will be returned.
     *
     * @throws {@link RequestError} if the user does not exist (`unknownUserError`).
     */
    public async getShopPurchases(
        userId: string,
        limit?: number,
        earlierThan?: string,
    ) {
        const { sdk, loyaltyProgramId } = this.client.getLoyaltyProgram();
        const result = await sdk.getShopPurchases({
            projectId: loyaltyProgramId,
            userId,
            limit,
            earlierThan,
        });
        return unwrap({
            result: result.data.getShopPurchases.result as ShopItemPurchase[],
            errors: result.data.getShopPurchases.errors,
        });
    }

    /** 
     * Purchases a shop item for a user.
     * 
     * Note that only shop items that have a shopItemDistributionType of `purchase` can be purchased.
     *
     * @param userId - The user ID of the user.
     * @param rewardId - The reward ID of the item to purchase.
     * @param partnerId - The partner ID of the partner offering the item to purchase.
     * @param amount - The number of the items to purchase.
     * @param deliveryName - The name of the person to deliver the item to.
     * @param deliveryAddress - The address of the person to deliver the item to.
     *
     * @throws {@link RequestError} if the user does not exist (`unknownUserError`), if
     * the item does not exist (`unknownShopItemError`), if the user does not have enough
     * points to purchase the item (`tooFewAvailableError`), or if the given amount is not
     * valid (`invalidAmountError`).
     */
    public async purchaseShopItem(
        userId: string,
        rewardId: string,
        partnerId: string,
        amount: number,
        deliveryName: string,
        deliveryAddress: {
            city: string;
            country: string;
            street: string;
            zip_code: string;
        },
    ) {
        const { sdk, loyaltyProgramId } = this.client.getLoyaltyProgram();
        const result = await sdk.purchaseShopItem({
            projectId: loyaltyProgramId,
            userId,
            rewardId,
            partnerId,
            amount,
            deliveryAddress,
            deliveryName,
        });
        return unwrap(result.data.purchaseShopItem);
    }

    /**
     * Purchases a lottery ticket for a user.
     * 
     * Note that only tickets for shop items that have a shopItemDistributionType of
     * `lottery` can be purchased.
     *
     * @param userId - The user ID of the user.
     * @param rewardId - The reward ID of the lottery shop item to purchase tickets for.
     * @param partnerId - The partner ID of the partner offering the lottery shop item to
     * purchase tickets for.
     * @param amount - The number of the tickets to purchase.
     * @param deliveryName - The name of the person to deliver the item to.
     * @param deliveryAddress - The address of the person to deliver the item to.
     *
     * @throws {@link RequestError} if the user does not exist (`unknownUserError`), if
     * the item does not exist (`unknownShopItemError`), if the user does not have enough
     * points to purchase the ticket (`tooFewAvailableError`), or if the given amount is not
     * valid (`invalidAmountError`).
     */
    public async purchaseLotteryTicket(
        userId: string,
        rewardId: string,
        partnerId: string,
        amount: number,
        deliveryName: string,
        deliveryAddress: {
            city: string;
            country: string;
            street: string;
            zip_code: string;
        },
    ) {
        const { sdk, loyaltyProgramId } = this.client.getLoyaltyProgram();
        const result = await sdk.purchaseLotteryTicket({
            projectId: loyaltyProgramId,
            userId,
            rewardId,
            partnerId,
            amount,
            deliveryAddress,
            deliveryName,
        });
        return unwrap(result.data.purchaseLotteryTicket);
    }
    
    /**
     * Places a bid on a bidding shop item.
     * 
     * Note that only shop items that have a shopItemDistributionType of `bidding` can be
     * bid on.
     *
     * @param userId - The user ID of the user.
     * @param rewardId - The reward ID of the shop item to bid on.
     * @param partnerId - The partner ID of the partner offering the shop item to bid on.
     * @param bid - The number of fan points to bid on the item.
     * @param deliveryName - The name of the person to deliver the item to.
     * @param deliveryAddress - The address of the person to deliver the item to.
     *
     * @throws {@link RequestError} if the user does not exist (`unknownUserError`), if
     * the item does not exist (`unknownShopItemError`), if the user does not have enough
     * points to place the bid (`tooFewAvailableError`), or if the given bid is not
     * valid (`invalidBidAmountError`).
     */
    public async bidOnShopItem(
        userId: string,
        rewardId: string,
        partnerId: string,
        bid: number,
        deliveryName: string,
        deliveryAddress: {
            city: string;
            country: string;
            street: string;
            zip_code: string;
        },
    ) {
        const { sdk, loyaltyProgramId } = this.client.getLoyaltyProgram();
        const result = await sdk.bidOnShopItem({
            projectId: loyaltyProgramId,
            userId,
            rewardId,
            partnerId,
            bid,
            deliveryAddress,
            deliveryName,
        });
        return unwrap(result.data.bidOnShopItem);
    }

    /**
     * Returns the current status of the auction for a lottery shop item.
     *
     * @param userId - The user ID of the user.
     * @param rewardId - The reward ID of the shop item to get the auction status for.
     * @param partnerId - The partner ID of the partner offering the shop item to get the
     * auction status for.
     *
     * @throws {@link RequestError} if the user does not exist (`unknownUserError`) or if
     * the item does not exist (`unknownShopItemError`).
     */
    public async getAuctionStatus(
        userId: string,
        rewardId: string,
        partnerId: string,
    ) {
        const { sdk, loyaltyProgramId } = this.client.getLoyaltyProgram();
        const result = await sdk.getAuctionStatus({
            projectId: loyaltyProgramId,
            userId,
            rewardId,
            partnerId,
        });
        return unwrap(result.data.getAuctionStatus);
    }
}
