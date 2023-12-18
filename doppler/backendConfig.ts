const config = {
    oAuthDomain: 'https://{{.AWS_COGNITO_OAUTH_DOMAIN}}/oauth2/token',
    apiEndpoint: '{{.AWS_APPSYNC_GRAPHQL_API_URL}}',
    region: '{{.AWS_APPSYNC_REGION}}',
} as const;

export type Config = typeof config;
export default config;
