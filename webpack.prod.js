const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const conmmon = require('./webpack.common.js');
var CopyWebpackPlugin = require('copy-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(conmmon, {
	plugins: [
		new UglifyJSPlugin({
			sourceMap: true
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		})
	]
})