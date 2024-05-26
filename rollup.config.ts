import type { RollupOptions } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'

const configs: Array<RollupOptions> = [
  {
    input: 'src/index.ts',
    plugins: [typescript()],
    output: {
      format: 'esm',
      file: 'dist/index.mjs'
    }
  },
  {
    input: 'src/index.ts',
    plugins: [
      dts({
        tsconfig: 'tsconfig.json'
      })
    ],
    output: {
      format: 'esm',
      file: 'dist/index.d.ts'
    }
  }
]

export default configs
