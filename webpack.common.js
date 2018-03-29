const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

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
		new ExtractTextPlugin("style.css"),
		/*new webpack.optimize.CommonsChunkPlugin({
		    name: "vendor",
		    minChunks: function(module){
		      return module.context && module.context.includes("node_modules");
		    }
		}),
		new webpack.optimize.CommonsChunkPlugin({
		    name: "manifest",
		    minChunks: Infinity
		}),*/
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
	},
	optimization: {
		splitChunks: {
			chunks: "initial", // 必须三选一： "initial" | "all"(默认就是all) | "async" 
			minSize: 0, // 最小尺寸，默认0
			minChunks: 1, // 最小 chunk ，默认1
			maxAsyncRequests: 1, // 最大异步请求数， 默认1
			maxInitialRequests : 1, // 最大初始化请求书，默认1
			name: function(){}, // 名称，此选项可接收 function
			cacheGroups:{ // 这里开始设置缓存的 chunks
			 	priority: false, // 缓存组优先级
				vendor: { // key 为entry中定义的 入口名称
				    chunks: "initial", // 必须三选一： "initial" | "all" | "async"(默认就是异步) 
				    test: /Vue/, // 正则规则验证，如果符合就提取 chunk
				    name: "vendor", // 要缓存的 分隔出来的 chunk 名称 
				    minSize: 0,
				    minChunks: 1,
				    enforce: true,
				    maxAsyncRequests: 1, // 最大异步请求数， 默认1
				    maxInitialRequests : 1, // 最大初始化请求书，默认1
				    reuseExistingChunk: true // 可设置是否重用该chunk（查看源码没有发现默认值）
				}
			}
		}
	}
}

























