const config = {
    oAuthDomain:
        'https://main-user-exttest-pool-domain.auth.eu-central-1.amazoncognito.com/oauth2/token',
    apiEndpoint:
        'https://6sj4xf53arh3zch5luwpb6fv4m.appsync-api.eu-central-1.amazonaws.com/graphql',
    region: 'eu-central-1',
} as const;

export type Config = typeof config;
export default config;
