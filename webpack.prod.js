const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const conmmon = require('./webpack.common.js');
var CopyWebpackPlugin = require('copy-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(conmmon, {
	plugins: [
		new UglifyJSPlugin({
			sourceMap: true
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new ExtractTextPlugin({
			filename: path.resolve(__dirname, 'dist/app.css')
		}),
		new OptimizeCSSPlugin({
	      cssProcessorOptions: {
	        safe: true
	      }
	    }),
		new HtmlWebpackPlugin({
			title: '智铀科技',
			template: 'index.html'
		})
	]
})