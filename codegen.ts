import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: 'src/queries/fetchGraphQLSchema.js',
    documents: [
        'src/**/*Query.js',
        'src/**/*Mutation.js',
        'src/**/*Subscription.js',
        '!src/queries/generated/**/*',
    ],
    generates: {
        './src/queries/generated/types.d.ts': { plugins: ['typescript'] },
        './src/queries': {
            preset: 'near-operation-file',
            presetConfig: {
                baseTypesPath: './src/queries/generated/types.ts',
                extension: '.gql.d.ts',
            },
            plugins: ['@graphql-codegen/typescript-operations'],
            config: {
                addOperationExport: true,
            },
        },
    },
    config: {
        enumsAsTypes: true,
        avoidOptionals: true,
        immutableTypes: true,
        maybeValue: 'T | undefined',
    },
};

export default config;
