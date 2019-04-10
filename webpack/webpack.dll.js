/* eslint-disable */
const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'production',// development production
    entry: {
        react:['react','react-dom'],
    },
    output: {
        filename: '_dll_[name].js',
        path: path.resolve('./src/dll'),
        library: '_dll_[name]',
    },
    plugins: [
        new webpack.DllPlugin({
            name: '_dll_[name]', //这个名字与 library 名字一致
            path: path.resolve('./src/dll','manifest.json'), //这个路径和上面的path一样 输出 mainfest.json
        }),
    ]
}