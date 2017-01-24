const webpack = require('webpack')

module.exports = {
  entry: [
    './index.js'
  ],
  output: {
    path: './',
    filename: 'index.bundle.prod.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css?modules', 'sass']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel?cacheDirectory'
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      }
    ]
  }
}