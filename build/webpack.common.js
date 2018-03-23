const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

console.log(path.resolve());
module.exports = {
	entry: {
		index: './src/index'
	},	
	devtool: 'source-map',
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: '智铀科技',
			filename: 'index.html'
		})
	],
	output: {
		path: path.resolve('dist'),
		filename: '[name].[chunkhash].js'
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
	    alias: {
	      'vue$': 'vue/dist/vue.esm.js',
	      '@': resolve('src')
	    }
	},
	module: {
		rules: [
      		{
        		test: /\.vue$/,
        		loader: 'vue-loader'
      		},
      		{
        		test: /\.js$/,
        		loader: 'babel-loader',
        		include: [resolve('src'),resolve('/node_modules/element-ui/src'),resolve('/node_modules/element-ui/packages')]
      		},
		]
	}
}

























