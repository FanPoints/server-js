import {
    ClientError,
    GraphQLClient,
    RequestMiddleware,
    ResponseMiddleware,
} from 'graphql-request';
import config from './backendConfig';
import FanPointsModule from './FanPointsModule';
import { getSdk, Sdk } from './queries/generated/sdk';
import { AuthSession } from './utils/fetchToken';

/**
 * This client wraps the FanPoints API to allow convenient
 * access.
 */
export default class FanPointsClient {
    private authSession: AuthSession;
    private graphQLClient: GraphQLClient;
    private graphqlSDK: Sdk;

    public fanPoints: FanPointsModule;

    /**
     * This middleware adds the JWT token to the request headers.
     */
    private async requestMiddleware(request: Parameters<RequestMiddleware>[0]) {
        return {
            ...request,
            headers: {
                ...request.headers,
                authorization: await this.authSession.getToken(),
            },
        };
    }

    /**
     * This middleware handles the response from the GraphQL API.
     *
     * If the response is a 401 error, the JWT token is refreshed and
     * the request is sent again.
     */
    private async responseMiddleware(
        response: Parameters<ResponseMiddleware>[0],
    ) {
        if (
            response instanceof ClientError &&
            response.response.status === 401
        ) {
            await this.authSession.refreshToken();
            return this.graphQLClient.rawRequest(
                response.request.query[0],
                response.request.variables,
            );
        }
        return response;
    }

    constructor(
        clientId: string,
        secret: string,
        private projectId: string,
        apiEndpoint: string,
        oAuthDomain: string,
    ) {
        this.authSession = new AuthSession(clientId, secret, oAuthDomain);
        this.graphQLClient = new GraphQLClient(apiEndpoint, {
            requestMiddleware: this.requestMiddleware.bind(this),
            responseMiddleware: this.responseMiddleware.bind(this),
        });
        this.graphqlSDK = getSdk(this.graphQLClient);
        this.fanPoints = new FanPointsModule(this.projectId, this.graphqlSDK);
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
