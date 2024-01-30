import {
    ClientError,
    GraphQLClient,
    RequestMiddleware,
    ResponseMiddleware,
} from 'graphql-request';
import config from './backendConfig';
import { FanPointsModule } from './FanPointsModule';
import { getSdk, Sdk } from './queries/generated/sdk';
import { StatusPointsModule } from './StatusPointsModule';
import { UserModule } from './UserModule';
import { AuthSession } from './utils/fetchToken';

/**
 * This client wraps the FanPoints API to allow convenient access.
 */
export default class FanPointsClient {
    /** @hidden */
    private authSessions: Record<string, AuthSession>;
    /** @hidden */
    private graphQLClients: Record<string, GraphQLClient>;
    /** @hidden */
    private SDKs: Record<string, Sdk>;

    public fanPoints: FanPointsModule;
    public statusPoints: StatusPointsModule;
    public users: UserModule;

    /**
     * This middleware adds the JWT token to the request headers.
     * @hidden
     */
    private getRequestMiddleware =
        (authSession: AuthSession) =>
        async (request: Parameters<RequestMiddleware>[0]) => {
            return {
                ...request,
                headers: {
                    ...request.headers,
                    authorization: await authSession.getToken(),
                },
            };
        };

    /**
     * This middleware handles the response from the GraphQL API.
     *
     * If the response is a 401 error, the JWT token is refreshed and
     * the request is sent again.
     *
     * @hidden
     */
    private getResponseMiddleware =
        (authSession: AuthSession, graphQLClient: GraphQLClient) =>
        async (response: Parameters<ResponseMiddleware>[0]) => {
            if (
                response instanceof ClientError &&
                response.response.status === 401
            ) {
                await authSession.refreshToken();
                return graphQLClient.rawRequest(
                    response.request.query[0],
                    response.request.variables,
                );
            }
            return response;
        };

    private addSDK(id: string, clientId: string, secret: string) {
        this.authSessions[id] = new AuthSession(
            clientId,
            secret,
            this.oAuthDomain,
        );

        this.graphQLClients[id] = new GraphQLClient(this.apiEndpoint);
        this.graphQLClients[id].requestConfig.requestMiddleware =
            this.getRequestMiddleware(this.authSessions[id]).bind(this);
        this.graphQLClients[id].requestConfig.responseMiddleware =
            this.getResponseMiddleware(
                this.authSessions[id],
                this.graphQLClients[id],
            ).bind(this);

        this.SDKs[id] = getSdk(this.graphQLClients[id]);
    }

    public loyaltyProgramId(): string {
        if (!this.clientConfig.loyaltyProgramConfig) {
            throw new Error(
                'No loyalty program config was provided to the client.',
            );
        }
        return this.clientConfig.loyaltyProgramConfig.loyaltyProgramId;
    }
    public partnerId(partnerId?: string): string {
        if (partnerId) return partnerId;
        if (!this.clientConfig.partnerConfig) {
            throw new Error('No partner config was provided to the client.');
        }
        return this.clientConfig.partnerConfig.projectId;
    }

    public loyaltyProgramSdk(): Sdk {
        const sdk = this.SDKs[this.loyaltyProgramId()];

        if (!sdk) {
            throw new Error(
                'No loyalty program config was provided to the client.',
            );
        }

        return sdk;
    }

    public partnerSDK(partnerId?: string): Sdk {
        const sdk = this.SDKs[this.partnerId(partnerId)];

        if (!sdk) {
            throw new Error('No partner config was provided to the client.');
        }

        return sdk;
    }

    /** @hidden */
    constructor(
        private clientConfig: ClientConfig,
        private apiEndpoint: string,
        private oAuthDomain: string,
    ) {
        this.authSessions = {};
        this.graphQLClients = {};
        this.SDKs = {};

        const { loyaltyProgramConfig, partnerConfig, partnerConfigs } =
            clientConfig;

        if (loyaltyProgramConfig) {
            this.addSDK(
                loyaltyProgramConfig.loyaltyProgramId,
                loyaltyProgramConfig.clientId,
                loyaltyProgramConfig.secret,
            );
        }
        if (partnerConfig) {
            this.addSDK(
                partnerConfig.projectId,
                partnerConfig.clientId,
                partnerConfig.secret,
            );
        }
        if (partnerConfigs) {
            partnerConfigs.forEach((config) => {
                this.addSDK(config.projectId, config.clientId, config.secret);
            });
        }

        this.users = new UserModule(this);
        this.fanPoints = new FanPointsModule(this);
        this.statusPoints = new StatusPointsModule(this);
    }
}

/**
 * This is the configuration object for the FanPointsClient.
 */
export type Token = {
    /** The clientId you want to connect to. */
    clientId: string;
    /** The secret belonging to the clientId. It can be received from the FanPoints team. */
    secret: string;
};

export type LoyaltyProgramConfig = {
    /** The ID of the loyaltiy program you want to connect to. */
    loyaltyProgramId: string;
    /** The clientId you want to connect to. */
    clientId: string;
    /** The secret belonging to the clientId. */
    secret: string;
};

export type PartnerConfig = {
    /** The ID of the project you want to connect to. */
    projectId: string;
    /** The clientId you want to connect to. */
    clientId: string;
    /** The secret belonging to the clientId. */
    secret: string;
};
export type ClientConfig = {
    loyaltyProgramConfig?: LoyaltyProgramConfig;
    partnerConfig?: PartnerConfig;
    partnerConfigs?: PartnerConfig[];
};

/**
 * This method creates a new FanPointsClient instance.
 *
 * The client ID and secret are required to authenticate with the
 * FanPoints API. They can be received from the FanPoints team.
 */
export const createClient = (clientConfig: ClientConfig): FanPointsClient =>
    new FanPointsClient(clientConfig, config.apiEndpoint, config.oAuthDomain);
