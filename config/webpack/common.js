const HtmlPlugin = require('html-webpack-plugin');
module.exports = {
  plugins: [
    new HtmlPlugin({
      template: "./src/html/index.html"
    })
  ],
  entry: './src/js/index.js'
};
