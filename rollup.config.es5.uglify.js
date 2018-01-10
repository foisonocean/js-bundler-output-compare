import uglify from 'rollup-plugin-uglify'

import baseCOnfig from './rollup.config.es5'

baseCOnfig.output.file = 'output/rollup-es5-uglify/bundle.js'
baseCOnfig.plugins.push(uglify())

export default baseCOnfig
