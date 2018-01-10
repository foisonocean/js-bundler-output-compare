import closure from 'rollup-plugin-closure-compiler-js'

import baseCOnfig from './rollup.config.es5'

baseCOnfig.output.file = 'output/rollup-es5-closure/bundle.js'
baseCOnfig.plugins.push(closure({
  compilationLevel: 'SIMPLE',
  env: 'BROWSER',
  languageIn: 'ECMASCRIPT5',
  languageOut: 'ECMASCRIPT5',
  warningLevel: 'QUIET',
  applyInputSourceMaps: false,
  useTypesForOptimization: false,
  processCommonJsModules: false,
  rewritePolyfills: false,
}))

export default baseCOnfig
