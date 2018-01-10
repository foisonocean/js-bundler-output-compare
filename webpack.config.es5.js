const { resolve } = require('path')

const baseConfig = require('./webpack.config')

baseConfig.entry = './src/index.es5.js'

baseConfig.output.path = resolve(__dirname, './output/webpack-es5')

baseConfig.module = {
  rules: [
    {
      test: /\.jsx?$/,
      include: [resolve(__dirname, './src')],
      loader: 'babel-loader',
    },
  ],
}

module.exports = baseConfig
