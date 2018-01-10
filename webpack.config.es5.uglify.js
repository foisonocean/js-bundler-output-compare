const { resolve } = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const baseConfig = require('./webpack.config.es5')

baseConfig.output.path = resolve(__dirname, './output/webpack-es5-uglify')
baseConfig.plugins.push(new UglifyJSPlugin())

module.exports = baseConfig
