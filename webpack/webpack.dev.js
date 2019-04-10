/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const base = require('./webpack.base.js');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
module.exports = webpackMerge(base,{
    mode: 'development',
    devServer:{
        contentBase:'./src/dll',
        port: 3000,
        inline: true,
        compress: true,
        hot: false,
        open: false,
        quiet: false,
        proxy: {
            '/api':'http://localhost:3001',
        }
    },
    plugins: [
        new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") }),
        new AddAssetHtmlPlugin({
            hash: true,
            filepath: path.resolve('./src/dll/*.js'),
            outputPath: path.resolve('/js'),
            publicPath: '',
        }),
        // new webpack.NamedModulesPlugin(),//打印更新的模块路径
        // new webpack.HotModuleReplacementPlugin(),//热更新插件
        // new FriendlyErrorsWebpackPlugin({
        //     compilationSuccessInfo: {
        //       messages: ['You application is running here http://localhost:3000'],
        //       notes: ['Some additionnal notes to be displayed unpon successful compilation']
        //     },
        //     onErrors: function (severity, errors) {
        //         console.log('------->',errors);
        //     },
        //     clearConsole: true,
        //     additionalFormatters: [],
        //     additionalTransformers: []
        //   })
    ]

})

// console.log(JSON.stringify(module.exports))