const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: [
    './src/color.js'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'envify-loader!babel'
    },
    {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }
  ]},
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  sassLoader: {
     includePaths: [path.resolve(__dirname, "./styles")]
   }
}
