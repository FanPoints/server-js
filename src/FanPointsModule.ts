import {
    Sdk,
    TransactionIdentifierInput,
    TransactionType,
} from './queries/generated/sdk';
import { Expand } from './utils/expandType';

type FanPointsReward =
    | undefined
    | {
          claimedDate: undefined | string;
          details: {
              transactionType: TransactionType;
          };
          groupId: string;
          nr: number;
          oldOwnerId: string;
          ownerId: string;
          reward: {
              __typename: 'FanPointsReward';
              amount: number;
          };
      };

/**
 *
 * This class allows you to interact with the FanPoints module. The FanPoints
 * module allows to distribute FanPoints to users and collect FanPoints from a
 * user as a method of payment.
 */
export class FanPointsModule {
    /** @hidden */
    constructor(
        private projectId: string,
        private graphqlSDK: Sdk,
    ) {}

    /**
     * Returns the total amount FanPoints the user has collected.
     *
     * @param userId - the id of the user
     * @returns an object containing the total amount of fan points the user has collected.
     */
    public async getFanPointsBalance(userId: string) {
        const result = await this.graphqlSDK.getFanPointsBalance({
            projectId: this.projectId,
            userId,
        });
        return result.data.getFanPointsBalance;
    }

    /**
     * Returns all FanPoints transactions that represent Fan Points distributed
     * to the user.
     *
     * @remarks
     * The parameters limit and lastReturnedTransaction can be used
     * to paginate the results.
     *
     * If limit is given, at most limit transactions
     * will be returned. If lastReturnedTransaction is given, only transactions
     * after this transaction will be returned. Combine both parameters to
     * paginate the results.
     *
     * @param userId - the id of the user
     * @param limit - the maximum number of transactions to return
     * @param lastReturnedTransaction - if given, transactions after this transaction will be returned
     *
     * @returns an object containing the relevant transactions.
     */
    public async getDistributionTransactions(
        userId: string,
        limit?: number,
        lastReturnedTransaction?: TransactionIdentifierInput,
    ) {
        const { result, errors } = (
            await this.graphqlSDK.getFanPointsDistributions({
                projectId: this.projectId,
                userId,
                limit,
                lastReturnedTransaction,
            })
        ).data.getFanPointsDistributions;
        return { result: result as Expand<FanPointsReward[]>, errors };
    }

    /**
     * Returns all FanPoints transactions that represent Fan Points collected
     * from the user.
     *
     * @remarks
     * The parameters limit and lastReturnedTransaction can be used
     * to paginate the results.
     *
     * If limit is given, at most limit transactions
     * will be returned. If lastReturnedTransaction is given, only transactions
     * after this transaction will be returned. Combine both parameters to
     * paginate the results.
     *
     * @param userId - the id of the user
     * @param limit - the maximum number of transactions to return
     * @param lastReturnedTransaction - if given, transactions after this transaction will be returned
     *
     * @returns an object containing the relevant transactions.
     */
    public async getCollectionTransactions(
        userId: string,
        limit?: number,
        lastReturnedTransaction?: TransactionIdentifierInput,
    ) {
        const { result, errors } = (
            await this.graphqlSDK.getFanPointsCollections({
                projectId: this.projectId,
                userId,
                limit,
                lastReturnedTransaction,
            })
        ).data.getFanPointsCollections;
        return { result: result as Expand<FanPointsReward[]>, errors };
    }

    /**
     * Returns all transactions connected to the given transaction.
     *
     * @remarks
     * A transaction A can be connected to another transactions B if A is the
     * undo transaction of B or B is the undo transaction of A.
     *
     * @param groupId - the id of the transaction group
     * @param nr - the nr of the transaction within the group
     *
     *  @returns an object containing all connected transactions.
     */
    public async getTransactionHistory(groupId: string, nr: number) {
        const { result, errors } = (
            await this.graphqlSDK.getFanPointsTransactionHistory({
                projectId: this.projectId,
                groupId,
                nr,
            })
        ).data.getFanPointsTransactionHistory;
        return { result: result as Expand<FanPointsReward[]>, errors };
    }

    /**
     * Collects FanPoints from a user.
     *
     * @remarks
     * Collecting FanPoints from a user is a method of payment and leads to
     * fanpoints being deducted from the user's account.
     *
     * The given partner is then granted the corresponding monetary value
     * from FanPoints.
     *
     * The title and description can be used to add human readable information
     * on the transaction that could be used to display to the user.
     *
     * A custom group id can be given in order to link the transaction to a
     * specific event on your side. This operation is idempotent w.r.t. the
     * custom group id. This means that if you call this method twice with the
     * same custom group id, the second call will not have any effect.
     *
     * @param userId - the id of the user
     * @param partnerId - the id of the partner
     * @param amount - the amount of FanPoints to collect
     * @param title - the title of the transaction
     * @param description - the description of the transaction
     * @param customGroupId - the id of the custom group¨
     *
     * @returns an object containing the performed transaction.
     */
    public async collectFanPoints(
        userId: string,
        partnerId: string,
        amount: number,
        title: string,
        description: string,
        customGroupId?: string,
    ) {
        const { result, errors } = (
            await this.graphqlSDK.collectFanPoints({
                projectId: this.projectId,
                userId,
                partnerId,
                amount,
                title,
                description,
                customGroupId,
            })
        ).data.collectFanPoints;
        return { result: result as Expand<FanPointsReward[]>, errors };
    }

    /**
     * Distributes FanPoints to a user.
     *
     * @remarks
     * This allows users to earn FanPoints.
     *
     * Distributing FanPoints to a user leads to the given partner being
     * charged the corresponding monetary value from FanPoints.
     *
     * The title and description can be used to add human readable information
     * on the transaction that could be used to display to the user.
     *
     * A custom group id can be given in order to link the transaction to a
     * specific event on your side. This operation is idempotent w.r.t. the
     * custom group id. This means that if you call this method twice with the
     * same custom group id, the second call will not have any effect.
     *
     * @param userId - the id of the user
     * @param partnerId - the id of the partner
     * @param amount - the amount of FanPoints to collect
     * @param title - the title of the transaction
     * @param description - the description of the transaction
     * @param customGroupId - the id of the custom group¨
     *
     * @returns an object containing the performed transaction.
     */
    public async distributeFanPoints(
        userId: string,
        partnerId: string,
        amount: number,
        title: string,
        description: string,
        customGroupId?: string,
    ) {
        const { result, errors } = (
            await this.graphqlSDK.distributeFanPoints({
                projectId: this.projectId,
                userId,
                partnerId,
                amount,
                title,
                description,
                customGroupId,
            })
        ).data.distributeFanPoints;
        return { result: result as Expand<FanPointsReward[]>, errors };
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
    public async undoTransactionGroup(groupId: string) {
        const { result, errors } = (
            await this.graphqlSDK.undoFanPointsTransaction({
                projectId: this.projectId,
                groupId: groupId,
            })
        ).data.undoFanPointsTransaction;
        return { result: result as Expand<FanPointsReward[]>, errors };
    }
}
