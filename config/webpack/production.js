const path         = require('path');
const Merge        = require('webpack-merge');
const CommonConfig = require('./common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = Merge(CommonConfig, {
  mode: "production",
  output: {
    path: path.join(__dirname, '../../production'),
    filename: '[chunkhash]-bundle.js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[hash]-[name].css",
      chunkFilename: "[hash]-[id].css"
    })
  ]
});
