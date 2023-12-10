import {
    Get_Fan_Points_TransactionsQuery,
    GetNumFanPointsResult,
    Sdk,
    TransactionIdentifierInput,
} from './queries/generated/sdk';

/**
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
    public async getNumFanPoints(
        userId: string,
    ): Promise<GetNumFanPointsResult> {
        const result = await this.graphqlSDK.get_num_fan_points({
            project_id: this.projectId,
            user_id: userId,
        });
        return result.data.get_num_fan_points;
    }

    /**
     * Returns the total amount FanPoints the user has distributed.
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
     * @returns an object containing the total amount of fan points the user has distributed.
     */
    public async getTransactions(
        userId: string,
        limit?: number,
        lastReturnedTransaction?: TransactionIdentifierInput,
    ): Promise<
        Get_Fan_Points_TransactionsQuery['get_fan_points_transactions']
    > {
        const result = await this.graphqlSDK.get_fan_points_transactions({
            project_id: this.projectId,
            user_id: userId,
            limit,
            last_returned_transaction: lastReturnedTransaction,
        });
        return result.data.get_fan_points_transactions;
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
        const result = await this.graphqlSDK.get_fan_points_transaction_history(
            {
                project_id: this.projectId,
                group_id: groupId,
                nr,
            },
        );
        return result.data.get_fan_points_transaction_history;
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
     * specific event on your side.
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
        const result = await this.graphqlSDK.collect_fan_points({
            project_id: this.projectId,
            user_id: userId,
            partner_id: partnerId,
            amount,
            title,
            description,
            custom_group_id: customGroupId,
        });
        return result.data.collect_fan_points;
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
     * specific event on your side.
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
        const result = await this.graphqlSDK.distribute_fan_points({
            project_id: this.projectId,
            user_id: userId,
            partner_id: partnerId,
            amount,
            title,
            description,
            custom_group_id: customGroupId,
        });
        return result.data.distribute_fan_points;
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
        const result = await this.graphqlSDK.undo_fan_points_transaction({
            project_id: this.projectId,
            group_id: groupId,
        });
        return result.data.undo_fan_points_transaction;
    }
}
