import { Sdk, TransactionIdentifierInput } from './queries/generated/sdk';

/**
 * This class allows you to interact with the FanPoints module.
 */
export default class FanPointsModule {
    constructor(
        private projectId: string,
        private graphqlSDK: Sdk,
    ) {}

    /**
     * Returns the total amount of fan points the user has collected.
     *
     * @param userId - the id of the user
     * @returns an object containing the total amount of fan points the user has collected.
     */
    public async getNumFanPoints(userId: string) {
        const result = await this.graphqlSDK.get_num_fan_points({
            project_id: this.projectId,
            user_id: userId,
        });
        return result.data.get_num_fan_points;
    }

    public async getTransactions(
        userId: string,
        limit?: number,
        lastReturnedTransaction?: TransactionIdentifierInput,
    ) {
        const result = await this.graphqlSDK.get_fan_points_transactions({
            project_id: this.projectId,
            user_id: userId,
            limit,
            last_returned_transaction: lastReturnedTransaction,
        });
        return result.data.get_fan_points_transactions;
    }

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

    public async undoTransactionGroup(groupId: string) {
        const result = await this.graphqlSDK.undo_fan_points_transaction({
            project_id: this.projectId,
            group_id: groupId,
        });
        return result.data.undo_fan_points_transaction;
    }
}
