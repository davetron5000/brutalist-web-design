const HtmlPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: "./src/html/index.html"
    }),
    new CopyWebpackPlugin(
      [ 
        { from: './src/images/**/*', to: './images', flatten: true }
      ], 
      {
        debug: true
      })
  ],
  entry: './src/js/index.js'
};
