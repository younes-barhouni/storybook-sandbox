import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDeps from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import visualizer from 'rollup-plugin-visualizer';
import { terser } from 'rollup-plugin-terser';
import { getFiles } from './scripts/buildUtils';

const extensions = ['.js', '.ts', '.jsx', '.tsx'];

export default {
  input: [
    './src/index.ts',
    ...getFiles('./src/common', extensions),
    ...getFiles('./src/components', extensions),
    ...getFiles('./src/hooks', extensions),
    ...getFiles('./src/utils', extensions),
  ],
  output: {
    dir: 'dist',
    format: 'esm',
    preserveModules: true,
    preserveModulesRoot: 'src',
    sourcemap: true,
  },
  plugins: [
    peerDeps(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.build.json',
      declaration: true,
      declarationDir: 'dist',
    }),
    postcss(),
    terser(),
    visualizer({
      filename: 'bundle-analysis.html',
      open: true,
    }),
  ],
};
