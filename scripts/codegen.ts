import type { CodegenConfig } from '@graphql-codegen/cli';
import 'dotenv/config';

const schema: Record<string, Record<string, unknown>> = {};
schema[process.env.AWS_APPSYNC_GRAPHQL_API_URL as string] = {
    headers: {
        'x-api-key': process.env.AWS_APPSYNC_X_API_KEY,
    },
};

const config: CodegenConfig = {
    overwrite: true,
    schema: schema,
    documents: ['src/queries/**/*.graphql'],
    generates: {
        './src/queries/generated/sdk.ts': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-graphql-request',
            ],
            config: {
                rawRequest: true,
                avoidOptionals: true,
                maybeValue: 'T | undefined',
                skipTypename: true,
                printFieldsOnNewLines: true,
                enumsAsTypes: true,
            },
        },
    },
};

export default config;
