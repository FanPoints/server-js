import config from './backendConfig';
import FanPointsClient from './FanPointsClient';

/**
 * This is the configuration object for the FanPointsClient.
 */
export type ClientConfig = {
    clientId: string;
    secret: string;
};

/**
 * This method creates a new FanPointsClient instance.
 *
 * The client ID and secret are required to authenticate with the
 * FanPoints API. You can get them from the FanPoints team.
 */
export const createClient = ({
    clientId,
    secret,
}: ClientConfig): FanPointsClient =>
    new FanPointsClient(
        clientId,
        secret,
        config.apiEndpoint,
        config.oAuthDomain,
    );
