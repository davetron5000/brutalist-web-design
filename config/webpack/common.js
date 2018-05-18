const HtmlPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: "./src/html/index.html",
      minify: {
        collapseWhitespace: true,
        conservativeCollapse: true,
        removeComments: true
      }
    }),
    new CopyWebpackPlugin(
      [ 
        { from: './src/images/**/*', to: './images', flatten: true, ignore: [ "Icon.pxm", "Icon.png" ] },
        { from: './src/images/favicon.ico', to: '.', flatten: true },
        { from: './src/html/**/*',   to: '.',        flatten: true, ignore: [ "index.html" ] }
      ], 
      {
        debug: true
      })
  ],
  entry: './src/js/index.js'
};
