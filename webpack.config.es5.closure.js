const { resolve } = require('path')
const ClosurePlugin = require('closure-webpack-plugin')
const ClosureCompiler = require('google-closure-compiler-js').webpack

const baseConfig = require('./webpack.config')

baseConfig.output.path = resolve(__dirname, './output/webpack-es5-closure')
baseConfig.plugins.push(new ClosurePlugin(
  { mode: 'AGGRESSIVE_BUNDLE' },
))
// baseConfig.plugins.push(new ClosureCompiler({
//   options: {
//     compilationLevel: 'SIMPLE',
//     env: 'BROWSER',
//     languageIn: 'ECMASCRIPT5',
//     languageOut: 'ECMASCRIPT5',
//     warningLevel: 'VERBOSE',
//     applyInputSourceMaps: false,
//     useTypesForOptimization: false,
//     processCommonJsModules: false,
//     rewritePolyfills: false,
//   },
// }))

module.exports = baseConfig
