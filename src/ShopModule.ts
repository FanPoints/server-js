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
    }
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
}
