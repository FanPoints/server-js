import config from './backendConfig';
import FanPointsClient from './FanPointsClient';
import { Sdk, TransactionIdentifierInput } from './queries/generated/sdk';

export default class FanPointsModule {
    constructor(
        private projectId: string,
        private graphqlSDK: Sdk,
    ) {}

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

/**
 * This is the configuration object for the FanPointsClient.
 */
export type ClientConfig = {
    /** The clientId you want to connect to. */
    clientId: string;
    /** The secret belonging to the clientId. It can be received from the FanPoints team. */
    secret: string;
    /** The id of the club. */
    projectId: string;
};

/**
 * This method creates a new FanPointsClient instance.
 *
 * The client ID and secret are required to authenticate with the
 * FanPoints API. They can be received from the FanPoints team.
 */
export const createClient = ({
    clientId,
    secret,
    projectId,
}: ClientConfig): FanPointsClient =>
    new FanPointsClient(
        clientId,
        secret,
        projectId,
        config.apiEndpoint,
        config.oAuthDomain,
    );
