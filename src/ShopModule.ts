import FanPointsClient from './FanPointsClient';
import { ShopItemCategory } from './queries/generated/sdk';
import { unwrap } from './utils/errors';

/**
 * This class allows you display the items in the shop. It allows allows to purchase
 * shop items, lottery tickets and place bids. Furthermore, it allows to retrieve purchases
 * done by the user.
 */
export class ShopModule {
    /** @hidden */
    constructor(private client: FanPointsClient) {}

    /**
     * Returns the items listed in the shop of the loyalty program.
     *
     * The items can be filtered by category. Use limit and lastReturnedRewardId
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
        return unwrap(result.data.getShopItems);
    }

    /**
     * Returns the given shop item.
     *
     * @param rewardId - The reward ID of the item to return.
     * @param limit - The ID of the partner offering the item.
     * 
     * @throws {@link RequestError} if the item does not exist (`unknownShopItemError`).
     */
    public async getShopItem(
        rewardId: string,
        partnerId: string,
    ) {
        const { sdk, loyaltyProgramId } = this.client.getLoyaltyProgram();
        const result = await sdk.getShopItem({
            projectId: loyaltyProgramId,
            rewardId,
            partnerId,
        });
        return unwrap(result.data.getShopItem);
    }

    /**
     * Returns the purchases of a user in your loyalty program.
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
        return unwrap(result.data.getShopPurchases);
    }
}
