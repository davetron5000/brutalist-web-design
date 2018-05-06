const path         = require('path');
const Merge        = require('webpack-merge');
const CommonConfig = require('./common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = Merge(CommonConfig, {
  mode: "development",
  output: {
    path: path.join(__dirname, '../../development'),
    filename: 'bundle.js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
});
