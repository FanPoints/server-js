import {
    Sdk,
    StatusPointsAction,
    TransactionIdentifierInput,
    TransactionType,
} from './queries/generated/sdk';
import { Expand } from './utils/expandType';

type StatusPointsReward =
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
              __typename: 'StatusPointsReward';
              amount: number;
          };
      };
/**
 * This class allows you to interact with the StatusPoints module. The StatusPoints
 * module allows to distribute Status Points to users to reward engagement.
 */
export class StatusPointsModule {
    /** @hidden */
    constructor(
        private projectId: string,
        private graphqlSDK: Sdk,
    ) {}

    /**
     * Returns the total amount Status Points the user has collected.
     *
     * @param userId - the id of the user
     * @returns an object containing the total amount of Status Points the user has collected.
     */
    public async getStatusPointsBalance(userId: string) {
        const result = await this.graphqlSDK.getStatusPointsBalance({
            projectId: this.projectId,
            userId,
        });
        return result.data.getStatusPointsBalance;
    }

    /**
     * Returns all Status Points transactions connected to the given user.
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
    public async getTransactions(
        userId: string,
        limit?: number,
        lastReturnedTransaction?: TransactionIdentifierInput,
    ) {
        const { result, errors } = (
            await this.graphqlSDK.getStatusPointsDistributions({
                projectId: this.projectId,
                userId,
                limit,
                lastReturnedTransaction,
            })
        ).data.getStatusPointsDistributions;
        return { result: result as Expand<StatusPointsReward[]>, errors };
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
            await this.graphqlSDK.getStatusPointsTransactionHistory({
                projectId: this.projectId,
                groupId,
                nr,
            })
        ).data.getStatusPointsTransactionHistory;
        return { result: result as Expand<StatusPointsReward[]>, errors };
    }

    /**
     * Returns the amount of Status Points the user would receive for the given
     * action.
     *
     * @remarks
     * This allows you to check how many Status Points a user would receive for
     * a given action. It does not actually distribute the Status Points. Use
     * {@link distributeStatusPoints} to distribute Status Points.
     *
     * @param action - the action to check
     *
     * @returns an object containing the amount of Status Points the user would receive.
     */
    public async getStatusPointsForAction(
        action: StatusPointsAction,
        partnerId: string,
    ) {
        const result = await this.graphqlSDK.getStatusPointsForAction({
            projectId: this.projectId,
            partnerId,
            action,
        });
        return result.data.getStatusPointsForAction;
    }

    /**
     * Distributes Status Points to a user. Every distribution is connected to an
     * action and a partner. The actual number of Status Points the user receives
     * depends on the action and the partner and can be accessed using the
     * {@link getStatusPointsForAction} method.
     *
     * @remarks
     * This allows users to earn Status Points to reward them for engaging with
     * the given partner.
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
    public async distributeStatusPoints(
        userId: string,
        partnerId: string,
        action: StatusPointsAction,
        title: string,
        description: string,
        customGroupId?: string,
    ) {
        const { result, errors } = (
            await this.graphqlSDK.distributeStatusPoints({
                projectId: this.projectId,
                userId,
                partnerId,
                action,
                title,
                description,
                customGroupId,
            })
        ).data.distributeStatusPoints;
        return { result: result as Expand<StatusPointsReward[]>, errors };
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
     * @param groupId - the id of the group to undo
     *
     * @returns an object containing the performed transaction.
     */
    public async undoTransactionGroup(groupId: string) {
        const { result, errors } = (
            await this.graphqlSDK.undoStatusPointsTransaction({
                projectId: this.projectId,
                groupId,
            })
        ).data.undoStatusPointsTransaction;
        return { result: result as Expand<StatusPointsReward[]>, errors };
    }
}
