import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: './scripts/fetchGraphQLSchema.cjs',
    documents: [
        'src/queries/**/*Query.ts',
        'src/queries/**/*Mutation.ts',
        'src/queries/**/*Subscription.ts',
        '!src/queries/generated/**/*',
    ],
    generates: {
        './src/queries/generated/': {
            preset: 'client',
            config: {
                skipTypename: true,
                avoidOptionals: true,
            },
        },
    },
};

export default config;
