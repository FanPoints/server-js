import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
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
        plugins: [nodeResolve(), typescript()],
        external: ['graphql-request', 'graphql', 'graphql-tag'],
    },
    {
        input: 'src/index.ts',
        output: {
            dir: 'dist/cjs',
            format: 'cjs',
        },
        plugins: [nodeResolve(), commonjs(), typescript()],
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
        plugins: [nodeResolve(), dts.default()],
        external: ['graphql-request', 'graphql', 'graphql-tag'],
    },
];
