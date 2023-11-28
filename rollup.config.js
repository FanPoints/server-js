import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                dir: 'dist',
                format: 'cjs',
                sourcemap: true,
            },
        ],
        plugins: [typescript()],
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
