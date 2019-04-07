const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const base = require('./webpack.base.js');

module.exports = webpackMerge(base,{
    mode: 'development',
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