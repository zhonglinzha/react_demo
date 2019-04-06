const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const base = require('./webpack.base.js');

const CleanWebpackPlugin = require('clean-webpack-plugin');//清理文件
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");//这个是因为 css 优化导致 js 不能压缩，所以用这个压缩js
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");//压缩css 和 抽离css 一起使用

module.exports = webpackMerge(base,{
    mode: 'production',

    optimization: { 
        minimizer: [
            new UglifyJsPlugin({
              cache: true,
              parallel: true,
              sourceMap: false,
            }),
            new OptimizeCSSAssetsPlugin()
          ]
    },

    plugins: [
        new webpack.DefinePlugin({
            DEV: JSON.stringify('production')
        }),
        new CleanWebpackPlugin({}),
    ]
})