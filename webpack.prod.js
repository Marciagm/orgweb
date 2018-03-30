const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const conmmon = require('./webpack.common.js');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(conmmon, {
	plugins: [
		new UglifyJSPlugin({
			uglifyOptions: {
				warnings: false,
				compress: {
					warnings: false
				}
			}
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new OptimizeCSSPlugin({
			cssProcessorOptions: {
				safe: true
			}
		})
	]
})