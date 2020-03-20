const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MinifyPlugin = require('babel-minify-webpack-plugin')
const webpack =require('webpack')

module.exports = merge(common, {
  devtool: 'source-map',
  mode: 'production',
  plugins: [
    new MinifyPlugin({}, { comments: false }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
});