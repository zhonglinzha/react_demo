/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const base = require('./webpack.base.js');

const CleanWebpackPlugin = require('clean-webpack-plugin');//清理文件
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");//这个是因为 css 优化导致 js 不能压缩，所以用这个压缩js
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");//压缩css 和 抽离css 一起使用
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

module.exports = webpackMerge(base,{
    mode: 'production',
    performance: {
        hints: 'warning',
        maxAssetSize: 2500000, //单文件超过250k，命令行告警
        maxEntrypointSize: 2500000, //首次加载文件总和超过250k，命令行告警
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
              cache: true,
              parallel: true,
              sourceMap: false,
            }),
            new OptimizeCSSAssetsPlugin()
        ],
        //minimize: true, //取代 new UglifyJsPlugin(/* ... */)
        // providedExports: true,
        // usedExports: true,
        //识别package.json中的sideEffects以剔除无用的模块，用来做tree-shake
        //依赖于optimization.providedExports和optimization.usedExports
        // sideEffects: true,
        //取代 new webpack.optimize.ModuleConcatenationPlugin()
        // concatenateModules: true,
        //取代 new webpack.NoEmitOnErrorsPlugin()，编译错误时不打印输出资源。
        // noEmitOnErrors: true
    },
    plugins: [
        new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
        new AddAssetHtmlPlugin({
            hash: true,
            filepath: path.resolve('./src/dll/*.js'),
            outputPath: path.resolve('/js'),
            publicPath: 'js/',
        }),
        new CleanWebpackPlugin({}),
    ]
})

// console.log(JSON.stringify(module.exports))