import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

const dts = require('rollup-plugin-dts');

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                dir: 'dist/esm',
                format: 'esm',
            },
        ],
        plugins: [typescript()],
        external: ['graphql-request', 'graphql', 'graphql-tag'],
    },
    {
        input: 'src/index.ts',
        output: {
            dir: 'dist/cjs',
            format: 'cjs',
        },
        plugins: [commonjs(), typescript()],
        external: ['graphql-request', 'graphql', 'graphql-tag'],
    },
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/index.d.ts',
                format: 'es',
            },
        ],
        plugins: [dts.default()],
        external: ['graphql-request', 'graphql', 'graphql-tag'],
    },
];
