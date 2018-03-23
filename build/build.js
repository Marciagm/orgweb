const webpack = require('webpack');
const webpackConfig = require('./webpack.prod.js');

webpack(webpackConfig, (err, stats) => {
  if (err || stats.hasErrors()) {
  	console.log(stats);
    // Handle errors here
  }
  // Done processing
});