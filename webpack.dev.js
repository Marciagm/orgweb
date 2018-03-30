const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
	// for development environment
    //devtool: '#cheap-module-eval-source-map',
	devServer: {
		contentBase: path.resolve(__dirname, '/dist'),
		compress: true,
		port: 9000
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		})
	]
})