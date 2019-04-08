const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const base = require('./webpack.base.js');


const UglifyJsPlugin = require("uglifyjs-webpack-plugin");//这个是因为 css 优化导致 js 不能压缩，所以用这个压缩js
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");//压缩css 和 抽离css 一起使用

module.exports = webpackMerge(base,{
    mode: 'development',
    optimization: {
        minimizer: [
          new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: true
          }),
          new OptimizeCSSAssetsPlugin()
        ],
        runtimeChunk: {
          "name": "manifest"
        },
        splitChunks: {
          cacheGroups: {
            default: false,
            vendors: false,
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all'
            }
    
          }
        }
      },
    devServer:{
        contentBase:'./dist',
        port: 3000,
        inline: true,
        compress: true,
        hot: false,
        open: false,
        proxy: {
            '/api':'http://localhost:3000',
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            DEV: JSON.stringify('development')
        }),
        // new webpack.NamedModulesPlugin(),//打印更新的模块路径
        // new webpack.HotModuleReplacementPlugin(),//热更新插件
    ]

})