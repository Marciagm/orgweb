const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/*function resolve(dir) {
  return path.join(__dirname, dir)
}*/

module.exports = {
	entry: {
		main: './src/main.js'
	},	
	plugins: [
		//new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: '智铀科技',
			template: 'index.html'
		}),
		new ExtractTextPlugin("style.css")
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		//filename: '[name].[chunkhash].js',
		filename: '[name].js',
		publicPath: '/'
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
	    alias: {
	      'vue$': 'vue/dist/vue.esm.js',
	      '@': path.resolve(__dirname, 'src'),
	      'base': '@/css/base.scss'
	    }
	},
	module: {
		rules: [
      		{
        		test: /\.vue$/,
        		loader: 'vue-loader',
        		options: {
        			extractCSS: true,
        			postcss: [require('autoprefixer')(),require('cssnano')()],
        			loaders: {
        				js: 'babel-loader!eslint-loader'
        			}
        		}
      		},{
      			test: /\.js$/,
      			loader: 'babel-loader',
		        //include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'test'), path.resolve(__dirname, '/node_modules/element-ui/src'),path.resolve(__dirname, '/node_modules/element-ui/packages')]
      		},
      		
      		{
      			test: /\.css$/,
      			use: ['style-loader', 'css-loader']
      		},
      		{
		        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
		        loader: 'url-loader'
		     },
      		{ 
      			test: /\.(eot|woff|ttf)$/, 
      			loader: 'file-loader' 
      		}
		]
	}
}

























