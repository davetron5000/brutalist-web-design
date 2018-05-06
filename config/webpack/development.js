const path         = require('path');
const Merge        = require('webpack-merge');
const CommonConfig = require('./common.js');

module.exports = Merge(CommonConfig, {
  mode: "development",
  output: {
    path: path.join(__dirname, '../../development'),
    filename: 'bundle.js'
  }
});
