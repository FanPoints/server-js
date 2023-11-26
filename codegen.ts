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
        './src/queries/generated/types.d.ts': {
            plugins: ['typescript'],
        },
    },
    config: {
        enumsAsTypes: true,
    },
};

export default config;
