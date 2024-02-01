import FanPointsClient from './FanPointsClient';
import { unwrap } from './utils/errors';

/**
 * This class allows you to interact with the StatusPoints module. The StatusPoints
 * module allows to distribute Status Points to users to reward engagement.
 */
export class StatusPointsModule {
    /** @hidden */
    constructor(private client: FanPointsClient) {}

    /**
     * Returns the total amount Status Points the user has collected.
     *
     * @param userId - the id of the user
     * @returns an object containing the total amount of Status Points the user has collected.
     */
    public async getBalance(userId: string) {
        const { sdk, loyaltyProgramId } = this.client.getLoyaltyProgram();
        const result = await sdk.getStatusPointsBalance({
            projectId: loyaltyProgramId,
            userId,
        });
        return unwrap(result.data.getStatusPointsBalance);
    }
    /**
     * Returns all Status Points transactions connected to the given user.
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
     * @param earlierThan - if given, transactions after this date will be returned
     *
     * @returns an object containing the relevant transactions.
     */
    public async getPerformedActions(
        userId: string,
        partnerId?: string,
        limit?: number,
        earlierThan?: string,
    ) {
        const partnersToQuery = partnerId
            ? [this.client.getPartner(partnerId)]
            : this.client.getPartners();

        const transactions = [];

        for (const { sdk, partnerId } of partnersToQuery) {
            const result = await sdk.getStatusPointsTransactions({
                projectId: this.client.loyaltyProgramId,
                partnerId,
                userId,
                limit,
                earlierThan,
            });
            transactions.push(
                ...unwrap(result.data.getStatusPointsTransactions),
            );
        }

        return transactions;
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
        tags: string[],
        specificPartnerId?: string,
    ) {
        const { sdk, partnerId } = this.client.getPartner(specificPartnerId);
        const result = await sdk.getStatusPointsForAction({
            partnerId,
            tags,
        });
        return unwrap(result.data.getStatusPointsForAction);
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
     * @param customActionId - the id of the custom group¨
     *
     * @returns an object containing the performed transaction.
     */
    public async giveStatusPointsOnAction(
        userId: string,
        tags: string[],
        title: string,
        description: string,
        specificPartnerId?: string,
        customActionId?: string,
    ) {
        const { sdk, partnerId } = this.client.getPartner(specificPartnerId);
        const result = (
            await sdk.giveStatusPoints({
                projectId: this.client.loyaltyProgramId,
                userId,
                partnerId,
                tags,
                title,
                description,
                customActionId,
            })
        ).data.giveStatusPoints;
        return unwrap(result);
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
    public async undoAction(actionId: string, specificPartnerId?: string) {
        const { sdk, partnerId } = this.client.getPartner(specificPartnerId);
        const result = (
            await sdk.undoStatusPointsTransaction({
                partnerId,
                actionId,
            })
        ).data.undoStatusPointsTransaction;
        return unwrap(result);
    }
}
