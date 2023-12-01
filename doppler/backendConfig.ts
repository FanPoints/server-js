const config = {
    oAuthDomain:
        'https://oauthtestdomain.auth.eu-central-1.amazoncognito.com/oauth2/token',
    apiEndpoint:
        'https://jdb5iouccjaatkttxjgrrph2by.appsync-api.eu-central-1.amazonaws.com/graphql',
    region: 'eu-central-1',
} as const;

export type Config = typeof config;
export default config;
