import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

import baseConfig from './rollup.config'

baseConfig.input = 'src/index.es5.js'
baseConfig.output.file = 'output/rollup-es5/bundle.js'
baseConfig.plugins.push(
  nodeResolve({
    jsnext: true,
    main: true
  }),

  commonjs({
    include: 'node_modules/**',  // Default: undefined
    sourceMap: false,  // Default: true
  }),

  babel({
    exclude: 'node_modules/**',
  })
)

export default baseConfig
