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
export default class FanPointsClient<PartnerLabel extends string = string> {
    /** @hidden */
    public loyaltyProgramId: string | undefined;
    /** @hidden */
    public defaultPartnerId: string | undefined;
    /** @hidden */
    private partnerIds: string[];
    /** @hidden */
    private partnerLabelToId: Record<PartnerLabel, string>;

    /** @hidden */
    private authSessions: Record<string, AuthSession>;
    /** @hidden */
    private graphQLClients: Record<string, GraphQLClient>;
    /** @hidden */
    private SDKs: Record<string, Sdk>;

    public fanPoints: FanPointsModule<PartnerLabel>;
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

    /**
     * Registers a new access token (client id + secret) for the given loyalty
     * program id or partner id.
     * @hidden */
    private addAccessToken(id: string, clientId: string, secret: string) {
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

    /**
     * @returns the loyalty program id and sdk for the set loyalty program.
     * @throws {@link Error} if no loyalty program was set.
     * @hidden
     */
    public getLoyaltyProgram(): { sdk: Sdk; loyaltyProgramId: string } {
        const loyaltyProgramId = this.loyaltyProgramId;
        if (!loyaltyProgramId) {
            throw new Error(
                'No loyalty program config was provided to the client.',
            );
        }

        const sdk = this.SDKs[loyaltyProgramId];
        if (!sdk) {
            throw new Error(
                'No loyalty program config was provided to the client.',
            );
        }

        return { loyaltyProgramId, sdk };
    }

    /**
     * @returns the partner id and sdk for the given partner id or label. If no partner id or label is set,
     * returns the default partner.
     * @throws {@link Error} if the partner id was not registered or no default partner is set.
     * @hidden
     */
    public getPartner(
        partnerId?: string,
        partnerLabel?: PartnerLabel,
    ): { sdk: Sdk; partnerId: string } {
        partnerId =
            partnerId ||
            (partnerLabel && this.partnerLabelToId[partnerLabel]) ||
            this.defaultPartnerId;

        if (!partnerId) {
            throw new Error(
                'No partner config was provided to the client. If you have set up multiple partners, make sure to either set up a default partner on config or use the partnerId or a partnerLabel parameters to specify which partner you are interacting with.',
            );
        }

        const sdk = this.SDKs[partnerId];
        if (!sdk) {
            throw new Error('No partner config was provided to the client.');
        }

        return { partnerId, sdk };
    }

    /**
     * @returns a map of partner ids and sdks for the configured partners.
     * @hidden
     */
    public getPartners(): { sdk: Sdk; partnerId: string }[] {
        return this.partnerIds.map((partnerId) => ({
            sdk: this.SDKs[partnerId],
            partnerId,
        }));
    }

    /** @hidden */
    constructor(
        clientConfig: ClientConfig<PartnerLabel>,
        private apiEndpoint: string,
        private oAuthDomain: string,
    ) {
        this.authSessions = {};
        this.graphQLClients = {};
        this.SDKs = {};

        const {
            loyaltyProgramConfig,
            defaultPartnerConfig: partnerConfig,
            otherPartnerConfigs: partnerConfigs,
        } = clientConfig;

        if (loyaltyProgramConfig) {
            this.addAccessToken(
                loyaltyProgramConfig.loyaltyProgramId,
                loyaltyProgramConfig.clientId,
                loyaltyProgramConfig.secret,
            );
        }

        this.partnerIds = [] as string[];
        this.partnerLabelToId = {} as Record<PartnerLabel, string>;
        this.loyaltyProgramId = loyaltyProgramConfig?.loyaltyProgramId;
        this.defaultPartnerId = partnerConfig?.partnerId;

        if (partnerConfig) {
            this.addAccessToken(
                partnerConfig.partnerId,
                partnerConfig.clientId,
                partnerConfig.secret,
            );
            this.partnerIds.push(partnerConfig.partnerId);
        }
        if (partnerConfigs) {
            partnerConfigs.forEach((config) => {
                this.addAccessToken(
                    config.partnerId,
                    config.clientId,
                    config.secret,
                );
                this.partnerIds.push(config.partnerId);
                config.partnerLabels?.forEach((label) => {
                    if (this.partnerLabelToId[label]) {
                        throw new Error(
                            `Label "${label}" is used by multiple partners.`,
                        );
                    }
                    this.partnerLabelToId[label] = config.partnerId;
                });
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

export interface PartnerConfig<PartnerLabel extends string> {
    /** The ID of the project you want to connect to. */
    partnerId: string;
    /** The clientId you want to connect to. */
    clientId: string;
    /** The secret belonging to the clientId. */
    secret: string;
    /** Partner labels can be used to map purchase items to different partners when more than one partner is configured. */
    partnerLabels?: PartnerLabel[];
}
export interface ClientConfig<PartnerLabel extends string> {
    /** Set this config if you are a loyalty program owner and want to manage it using the SDK. */
    loyaltyProgramConfig?: LoyaltyProgramConfig;
    /** Set this config if you are a partner and want to manage it with this partner using the SDk. */
    defaultPartnerConfig?: PartnerConfig<PartnerLabel>;
    /** Set this config if you want to manage multiple partners using the SDK. */
    otherPartnerConfigs?: PartnerConfig<PartnerLabel>[];
}

/**
 * This method creates a new FanPointsClient instance.
 *
 * @returns a single client instance that can be used to manage one or more partners and / or a
 * loyalty program.
 */
export const createClient = <PartnerLabel extends string = string>(
    clientConfig: ClientConfig<PartnerLabel>,
): FanPointsClient<PartnerLabel> =>
    new FanPointsClient(clientConfig, config.apiEndpoint, config.oAuthDomain);
