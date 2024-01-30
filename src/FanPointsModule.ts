import FanPointsClient from './FanPointsClient';
import { TransactionType } from './queries/generated/sdk';
import { Expand } from './utils/expandType';

type FanPointsTransaction =
    | undefined
    | {
          purchaseId?: string;
          userId: string;
          type: 'distributed_on_purchase' | 'purchased_with_fanpoints';
          purchaseItems: {
              purchaseItemId?: string;
              partnerId: string;
              title: string;
              description: string;
              price: number;
              currency: string;
              amount: number;
              tags: string[];
              date: string;
          }[];
      };

/**
 *
 * This class allows you to interact with the FanPoints module. The FanPoints
 * module allows to distribute FanPoints to users and collect FanPoints from a
 * user as a method of payment.
 */
export class FanPointsModule {
    /** @hidden */
    constructor(private client: FanPointsClient) {}

    /**
     * Returns the total amount FanPoints the user has collected.
     *
     * @param userId - the id of the user
     * @returns an object containing the total amount of fan points the user has collected.
     */
    public async getBalance(userId: string) {
        const result = await this.client
            .loyaltyProgramSdk()
            .getFanPointsBalance({
                projectId: this.client.loyaltyProgramId(),
                userId,
            });
        return result.data.getFanPointsBalance;
    }

    /**
     * Returns all FanPoints transactions connected to the given user.
     *
     * @remarks
     * The returned transactions are sorted by date, with the most recent
     * transaction being first.
     *
     * The parameters limit and lastReturnedTransaction can be used
     * to paginate the results.
     *
     * If limit is given, at most limit transactions
     * will be returned. If earlierThan is given, only transactions
     * thah happened before this transaction will be returned. Combine
     * both parameters to paginate the results.
     *
     * @param userId - the id of the user
     * @param limit - the maximum number of transactions to return
     * @param earlierThan - if given, transactions before this date will be returned
     *
     * @returns an object containing the relevant transactions.
     */
    public async getTransactions(
        userId: string,
        limit?: number,
        earlierThan?: string,
    ) {
        const { result, errors } = (
            await this.client.loyaltyProgramSdk().getFanPointsTransactions({
                projectId: this.client.loyaltyProgramId(),
                userId,
                limit,
                earlierThan,
            })
        ).data.getFanPointsTransactions;
        return { result: result as Expand<FanPointsTransaction[]>, errors };
    }

    public async giveFanPointsOnPurchase(
        userId: string,
        purchaseItems: {
            partnerId?: string;
            title: string;
            description: string;
            price: number;
            currency: string;
            tags?: string[];
        }[],
        customPurchaseId?: string,
    ) {
        const { result, errors } = (
            await this.client.loyaltyProgramSdk().distributeFanPoints({
                projectId: this.client.loyaltyProgramId(),
                userId,
            })
        ).data.getFanPointsTransactions;
        return { result: result as Expand<FanPointsTransaction[]>, errors };
    }

    public async payPurchaseWithFanPoints(
        userId: string,
        purchaseItems: {
            partnerId?: string;
            title: string;
            description: string;
            price: number;
            currency: string;
            tags?: string[];
        }[],
        customPurchaseId?: string,
    ) {
        const { result, errors } = (
            await this.client.loyaltyProgramSdk().collectFanPoints({
                projectId: this.client.loyaltyProgramId(),
                userId,
            })
        ).data.getFanPointsTransactions;
        return { result: result as Expand<FanPointsTransaction[]>, errors };
    }

    /**
     * Undoes a transaction group.
     *
     * @remarks
     * This allows you to undo a transaction group. This will reverse
     * the effect of e.g. a distribution or collection of FanPoints.
     *
     * Note that this might not be possible, e.g. if the FanPoints have
     * already been spent by the user.
     *
     * Undoing a transaction corresponds to creating a new undo transaction.
     * The method {@link getTransactionHistory} can be used to retrieve
     * the history of a transaction.
     *
     * This operation is idempotent w.r.t. the group id. This means that if
     * you call this method twice with the same group id, the second call
     * will not have any effect.
     *
     * @param groupId - the id of the group to undo
     *
     * @returns an object containing the performed transaction.
     */
    public async undoPurchase(purchaseId: string, purchaseItemId?: string) {
        const { result, errors } = (
            await this.graphqlSDK.undoFanPointsTransaction({
                projectId: this.projectId,
                groupId: groupId,
            })
        ).data.undoFanPointsTransaction;
        return { result: result as Expand<FanPointsTransaction[]>, errors };
    }
}
