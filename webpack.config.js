const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, dir)
}

console.log(path.resolve());
module.exports = {
	entry: {
		main: './src/main.js'
	},	
	devtool: 'inline-source-map',
    devServer: {
    	contentBase: resolve('dist'),
    	compress: true,
    	port: 9000
    },
	plugins: [
		new CleanWebpackPlugin([path.resolve('dist')]),
		new HtmlWebpackPlugin({
			title: '智铀科技',
			template: 'index.html'
		})
	],
	output: {
		path: path.resolve('dist'),
		filename: '[name].[chunkhash].js',
		publicPath: '/'
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
		        include: [resolve('src'), resolve('test'),resolve('/node_modules/element-ui/src'),resolve('/node_modules/element-ui/packages')]
      		}
		]
	}
}

























