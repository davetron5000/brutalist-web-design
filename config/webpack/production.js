const path         = require('path');
const Merge        = require('webpack-merge');
const CommonConfig = require('./common.js');

module.exports = Merge(CommonConfig, {
  mode: "production",
  output: {
    path: path.join(__dirname, '../../production'),
    filename: '[chunkhash]-bundle.js'
  }
});
