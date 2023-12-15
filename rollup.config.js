import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                dir: 'dist',
                format: 'esm',
                sourcemap: true,
            },
        ],
        plugins: [resolve(), typescript()],
        external: ['graphql-request'],
    },
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/types.d.ts',
                format: 'es',
            },
        ],
        plugins: [dts()],
    },
];
