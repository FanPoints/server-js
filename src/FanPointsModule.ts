import config from './backendConfig';
import FanPointsClient from './FanPointsClient';
import {
    RewardTransaction,
    Sdk,
    TransactionIdentifierInput,
} from './queries/generated/sdk';

type FanPointsTransaction = RewardTransaction & {
    reward: { __typename: 'FanPointsReward' };
};

// ToDo
const isFanPointsTransaction = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    object: any,
): object is FanPointsTransaction => {
    return object.reward.__typename === 'FanPointsReward';
};

export default class FanPointsModule {
    constructor(
        private clubId: string,
        private graphqlSDK: Sdk,
    ) {}

    public async getNumFanPoints(fanId: string) {
        const result = await this.graphqlSDK.get_num_fan_points({
            club_id: this.clubId,
            fan_id: fanId,
        });
        return result.data.get_num_fan_points;
    }

    public async getTransactions(
        fanId: string,
        limit?: number,
        lastReturnedTransaction?: TransactionIdentifierInput,
    ): Promise<FanPointsTransaction[]> {
        const result = await this.graphqlSDK.get_fan_points_transactions({
            club_id: this.clubId,
            fan_id: fanId,
            limit,
            last_returned_transaction: lastReturnedTransaction,
        });

        return result.data.get_fan_points_transactions.filter(
            isFanPointsTransaction,
        );
    }

    public async getTransactionHistory(
        fanId: string,
        transaction: TransactionIdentifierInput,
    ): Promise<FanPointsTransaction[]> {
        const result = await this.graphqlSDK.get_fan_points_transaction_history(
            {
                club_id: this.clubId,
                fan_id: fanId,
                transaction,
            },
        );
        return result.data.get_fan_points_transaction_history.filter(
            isFanPointsTransaction,
        );
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
    clubId: string;
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
    clubId,
}: ClientConfig): FanPointsClient =>
    new FanPointsClient(
        clientId,
        secret,
        clubId,
        config.apiEndpoint,
        config.oAuthDomain,
    );
