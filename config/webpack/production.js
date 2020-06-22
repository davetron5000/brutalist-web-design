const path         = require('path')
const Merge        = require('webpack-merge')
const CommonConfig = require('./common.js')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')


module.exports = Merge(CommonConfig, {
  mode: "production",
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
  output: {
    path: path.join(__dirname, '../../production'),
    filename: '[chunkhash]-bundle.js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[hash]-[name].css",
      chunkFilename: "[hash]-[id].css"
    })
  ]
});
