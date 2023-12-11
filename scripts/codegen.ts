import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: './scripts/fetchGraphQLSchema.cjs',
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
