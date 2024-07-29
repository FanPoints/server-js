import FanPointsClient from './FanPointsClient';
import {
    GetLootboxesQuery,
    OpenLootboxMutation,
} from './queries/generated/sdk';
import { unwrap } from './utils/errors';
import { Expand } from './utils/expandType';

type RawLootbox = NonNullable<
    GetLootboxesQuery['getLootboxes']['result']
>[number];
export type Lootbox = Expand<
    RawLootbox & {
        lootbox: RawLootbox['lootbox'] & { rewardType: 'Lootbox' };
    }
>;

type RawPrize = NonNullable<
    OpenLootboxMutation['openLootbox']['result']
>[number];
export type Prize = Expand<
    RawPrize & {
        prize: RawPrize['prize'] & {
            rewardType: 'Product' | 'FanPointsReward';
        };
    }
>;

/**
 * This class allows you to get the unopened lootboxes of users and to open lootboxes
 * and claim prizes.
 *
 * To get the obtained prizes of a user, you can use the `getObtainedProducts` method
 * in the marketplace module.
 */
export class PrizesModule {
    /** @hidden */
    constructor(private client: FanPointsClient) {}

    /**
     * Returns a list of unopened lootboxes for a user.
     *
     * Use the `openLootbox` method to open a lootbox and see the prizes.
     * In order to actually claim the prizes, use the `claimPrizes` method.
     *
     * @param userId - The user ID of the user to get the lootboxes for.
     *
     * @throws {@link RequestError} if the user does not exist (`unknownUserError`).
     */
    public async getLootboxes(userId: string) {
        const { sdk, loyaltyProgramId } = this.client.getLoyaltyProgram();
        const result = await sdk.getLootboxes({
            projectId: loyaltyProgramId,
            userId,
        });
        return unwrap({
            result: result.data.getLootboxes.result as Lootbox[],
            errors: result.data.getLootboxes.errors,
        });
    }

    /**
     * Opens a lootbox for a user to see the prizes.
     *
     * Once opened, the prizes are reserved for the user. However, they are only
     * available to the user after the prizes have been claimed. This allows a more
     * fine-grained control of when the prizes are distributed.
     *
     * @param userId - The user ID of the user to open the lootbox for.
     * @param transactionGroupId - The transaction group ID of the lootbox to open
     * (returned by the `getLootboxes` method).
     * @param transactionNr - The transaction number of the lootbox to open (returned by the
     * `getLootboxes` method).
     *
     * @throws {@link RequestError} if the user does not exist (`unknownUserError`), if the
     * lootbox does not exist (`unknownLootboxError`), or if the lootbox is already open
     * (`alreadyOpenedLootboxError`).
     *
     */
    public async openLootbox(
        userId: string,
        transactionGroupId: string,
        transactionNr: number,
    ) {
        const { sdk, loyaltyProgramId } = this.client.getLoyaltyProgram();
        const result = await sdk.openLootbox({
            projectId: loyaltyProgramId,
            userId,
            transactionGroupId,
            transactionNr,
        });
        return unwrap({
            result: result.data.openLootbox.result as Prize[],
            errors: result.data.openLootbox.errors,
        });
    }

    /**
     * Claims the prizes of an already opened lootbox.
     *
     * This method can only be called after the lootbox has been opened using the
     * `openLootbox` method.
     *
     * @param userId - The user ID of the user to claim the prizes for.
     * @param transactionGroupId - The transaction group ID of the reserved prizes (returned by
     * the `openLootbox` method).
     *
     * @throws {@link RequestError} if the user does not exist (`unknownUserError`), if the
     * lootbox does not exist (`unknownLootboxError`), or if the lootbox is not open yet
     * (`unknownLootboxError`).
     */
    public async claimPrizes(userId: string, transactionGroupId: string) {
        const { sdk, loyaltyProgramId } = this.client.getLoyaltyProgram();
        const result = await sdk.claimPrizes({
            projectId: loyaltyProgramId,
            userId,
            transactionGroupId,
        });
        return unwrap(result.data.claimPrizes);
    }
}
