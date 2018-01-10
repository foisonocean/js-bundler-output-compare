const { resolve } = require('path')

const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, './output/webpack'),
  },

  devtool: false,

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
}
