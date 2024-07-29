import FanPointsClient from './FanPointsClient';
import {
    GetShopItemQuery,
    GetShopPurchasesQuery,
    ProductCategory,
} from './queries/generated/sdk';
import { unwrap } from './utils/errors';
import { Expand } from './utils/expandType';

type RawShopItem = NonNullable<GetShopItemQuery['getShopItem']['result']>;
export type MarketplaceItem = Expand<
    RawShopItem & {
        product: RawShopItem['product'] & { rewardType: 'Product' };
        distributionPolicy: RawShopItem['distributionPolicy'] & {
            distributionType:
                | 'ShopPurchaseDistributionPolicy'
                | 'ShopAuctionDistributionPolicy'
                | 'ShopLotteryDistributionPolicy';
        };
    }
>;

type RawShopPurchase = NonNullable<
    GetShopPurchasesQuery['getShopPurchases']['result']
>[number];
export type MarketplacePurchase = Expand<
    RawShopPurchase & {
        product: RawShopPurchase['product'] & { rewardType: 'Product' };
    }
>;

/**
 * This class allows you to display the items in the marketplace, to purchase
 * items and lottery tickets and to place bids. Furthermore, it
 * allows to retrieve purchases done by the user.
 */
export class MarketplaceModule {
    /** @hidden */
    constructor(private client: FanPointsClient) {}

    /**
     * Returns the items listed in the marketplace of the loyalty program.
     *
     * The items can be filtered by category. Use `limit` and `lastReturnedRewardId`
     * to paginate the results.
     *
     * @param productCategory - The category of the items to return. If not specified,
     * all items will be returned.
     * @param limit - The maximum number of items to return. If not specified, all items
     * will be returned.
     * @param lastReturnedRewardId - The reward ID of the last returned item. If not specified,
     * the first items will be returned.
     */
    public async getMarketplaceItems(
        productCategory?: ProductCategory,
        limit?: number,
        lastReturnedRewardId?: string,
    ) {
        const { sdk, loyaltyProgramId } = this.client.getLoyaltyProgram();
        const result = await sdk.getShopItems({
            projectId: loyaltyProgramId,
            productCategory,
            limit,
            lastReturnedRewardId,
        });

        const shopItems = result.data.getShopItems.result.filter(
            (entry) =>
                entry.product?.rewardType === 'Product' &&
                (entry.distributionPolicy.distributionType ===
                    'ShopPurchaseDistributionPolicy' ||
                    entry.distributionPolicy.distributionType ===
                        'ShopAuctionDistributionPolicy' ||
                    entry.distributionPolicy.distributionType ===
                        'ShopLotteryDistributionPolicy'),
        );

        return shopItems as MarketplaceItem[];
    }

    /**
     * Returns the given marketplace item.
     *
     * @param rewardId - The reward ID of the item to return.
     * @param distributionPolicyId - The ID of the distribution policy of the item to return.
     * @param partnerId - The ID of the partner offering the item.
     *
     * @throws {@link RequestError} if the item does not exist (`unknownProductError`).
     */
    public async getMarketplaceItem(
        rewardId: string,
        distributionPolicyId: string,
        partnerId: string,
    ) {
        const { sdk, loyaltyProgramId } = this.client.getLoyaltyProgram();
        const result = await sdk.getShopItem({
            projectId: loyaltyProgramId,
            distributionPolicyId,
            rewardId,
            partnerId,
        });

        return unwrap({
            result: result.data.getShopItem.result as MarketplaceItem,
            errors: result.data.getShopItem.errors,
        });
    }

    /**
     * Returns the purchases of a user in your marketplace.
     *
     * @param userId - The user ID of the user.
     * @param limit - The maximum number of items to return. If not specified, all items
     * will be returned.
     * @param earlierThan - A timestamp in timezone-aware ISO 8601 format. If specified,
     * only purchases made before the given timestamp will be returned.
     *
     * @throws {@link RequestError} if the user does not exist (`unknownUserError`).
     */
    public async getPurchases(
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
            result: result.data.getShopPurchases
                .result as MarketplacePurchase[],
            errors: result.data.getShopPurchases.errors,
        });
    }

    /**
     * Purchases a marketplace item for a user.
     *
     * Note that only marketplace items that have a distributionType of `ShopPurchaseDistributionPolicy`
     * can be purchased.
     *
     * @param userId - The user ID of the user.
     * @param rewardId - The reward ID of the item to purchase.
     * @param distributionPolicyId - The ID of the distribution policy of the item to purchase.
     * @param partnerId - The partner ID of the partner offering the item to purchase.
     * @param amount - The number of the items to purchase.
     * @param deliveryName - The name of the person to deliver the item to.
     * @param deliveryAddress - The address of the person to deliver the item to.
     *
     * @throws {@link RequestError} if the user does not exist (`unknownUserError`), if
     * the item does not exist (`unknownProductError`), if the user does not have enough
     * points to purchase the item (`tooFewAvailableError`), or if the given amount is not
     * valid (`invalidAmountError`).
     */
    public async purchaseItem(
        userId: string,
        rewardId: string,
        distributionPolicyId: string,
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
            distributionPolicyId,
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
     * Note that only tickets for items that have a distributionType of
     * `ShopLotteryDistributionPolicy` can be purchased.
     *
     * After the lottery is over, the winners will be drawn and the products will be
     * distributed to the winners automatically.
     *
     * @param userId - The user ID of the user.
     * @param rewardId - The reward ID of the lottery marketplace item to purchase tickets for.
     * @param distributionPolicyId - The ID of the distribution policy of the lottery marketplace item to
     * purchase tickets for.
     * @param partnerId - The partner ID of the partner offering the lottery marketplace item to
     * purchase tickets for.
     * @param amount - The number of the tickets to purchase.
     * @param deliveryName - The name of the person to deliver the item to.
     * @param deliveryAddress - The address of the person to deliver the item to.
     *
     * @throws {@link RequestError} if the user does not exist (`unknownUserError`), if
     * the item does not exist (`unknownProductError`), if the user does not have enough
     * points to purchase the ticket (`tooFewAvailableError`), or if the given amount is not
     * valid (`invalidAmountError`).
     */
    public async purchaseLotteryTicket(
        userId: string,
        rewardId: string,
        distributionPolicyId: string,
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
            distributionPolicyId,
            rewardId,
            partnerId,
            amount,
            deliveryAddress,
            deliveryName,
        });
        return unwrap(result.data.purchaseLotteryTicket);
    }

    /**
     * Places a bid on a bidding marketplace item.
     *
     * Note that only marketplace items that have a distributionType of `ShopAuctionDistributionPolicy` can be
     * bid on.
     *
     * Only bids higher at least greater than 50 FP than the current highest bid will be accepted.
     * Otherwise, the bid will be rejected (`invalidBidAmountError`).
     *
     * When the auction is over, the bidder with the highest bid will be the winner and purchase
     * the item automatically.
     *
     * @param userId - The user ID of the user.
     * @param rewardId - The reward ID of the marketplace item to bid on.
     * @param distributionPolicyId - The ID of the distribution policy of the marketplace item to bid on.
     * @param partnerId - The partner ID of the partner offering the marketplace item to bid on.
     * @param bid - The number of fan points to bid on the item.
     * @param deliveryName - The name of the person to deliver the item to.
     * @param deliveryAddress - The address of the person to deliver the item to.
     *
     * @throws {@link RequestError} if the user does not exist (`unknownUserError`), if
     * the item does not exist (`unknownProductError`), if the user does not have enough
     * points to place the bid (`tooFewAvailableError`), or if the given bid is not
     * valid (`invalidBidAmountError`).
     */
    public async bidOnItem(
        userId: string,
        rewardId: string,
        distributionPolicyId: string,
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
            distributionPolicyId,
            partnerId,
            bid,
            deliveryAddress,
            deliveryName,
        });
        return unwrap(result.data.bidOnShopItem);
    }

    /**
     * Returns the current status of the auction for a lottery marketplace item.
     *
     * @param userId - The user ID of the user.
     * @param rewardId - The reward ID of the item to get the auction status for.
     * @param distributionPolicyId - The ID of the distribution policy of the item to get the auction status for.
     * @param partnerId - The partner ID of the partner offering the item to get the
     * auction status for.
     *
     * @throws {@link RequestError} if the user does not exist (`unknownUserError`) or if
     * the item does not exist (`unknownProductError`).
     */
    public async getAuctionStatus(
        userId: string,
        rewardId: string,
        distributionPolicyId: string,
        partnerId: string,
    ) {
        const { sdk, loyaltyProgramId } = this.client.getLoyaltyProgram();
        const result = await sdk.getAuctionStatus({
            projectId: loyaltyProgramId,
            userId,
            distributionPolicyId,
            rewardId,
            partnerId,
        });
        return unwrap(result.data.getAuctionStatus);
    }
}
