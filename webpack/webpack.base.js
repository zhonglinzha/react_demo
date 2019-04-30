/* eslint-disable */
const path = require('path');
const webpack = require('webpack');

const HtmlWebPackPlugin = require('html-webpack-plugin');//模版配置
const HappyPack = require('happypack');//多线程打包，加快打包速度
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//抽离css文件
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const StyleLintPlugin = require('stylelint-webpack-plugin');//样式格式化

const TestPlugin = require('../src/plugins/test-plugin');
const TestPlugin2 = require('../src/plugins/test2-plugin');

module.exports = {

    optimization: {
        // namedModules: true, //取代插件中的 new webpack.NamedModulesPlugin()
        // namedChunks: true,
        runtimeChunk: {
          "name": "manifest"
        },
        splitChunks: {
          cacheGroups: {
            default: false,
            // vendors: false,
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all'
            }
          }
        },
    },
    entry: path.resolve('./src/base/index.js'),

    output: {
        filename: 'js/[name].[hash:8].js',
        path: path.resolve('./dist'),
        publicPath: '',
        chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
    },

    resolve: {
        extensions: ['.js','.jsx','.json','.css','.sass','.less'],
        modules: ['node_modules'],
        alias: {
            '@base': path.resolve('./src/base'),
            '@dll': path.resolve('./src/dll'),
            '@page': path.resolve('./src/page'),
            '@store': path.resolve('./src/store'),
        },
    },

    resolveLoader: {
        modules: [path.resolve('./src/loaders') ,'node_modules'],
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'eslint-loader',
                include: path.resolve('./src'),
                exclude: /node_modules/,
                enforce: 'pre',
            },
            {   
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: path.resolve('./src'),
                use: 'happypack/loader?id=js',
            },
            {
                test: /\.(css|scss)$/,
                include: /src/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // {loader: 'style-loader'},
                    {loader: 'css-loader', options: {
                        modules: true,
                        localIdentName: '[local]_[hash:base64:8]',
                    }},
                    {loader: 'postcss-loader'},
                    {loader: 'sass-loader'},
                    {loader: 'test-loader'},

                ]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'postcss-loader'},
                    {loader: 'sass-loader'},
                ],
                exclude: /src/,
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024 * 8,
                            name: '[name].[hash:8].[ext]',
                            outputPath: 'img/',
                        }
                    }
                ]
            },
        ]
    },

    plugins: [
        // new BundleAnalyzerPlugin(),
        new StyleLintPlugin({
            files: '**/*.scss',
            failOnError: false,
            syntax: 'scss',
            fix: true,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash:8].css',
            chunkFilename: 'css/[name].[chunkhash:8].chunk.css',
        }),
        new HtmlWebPackPlugin({
            template: path.resolve('./src/base/index.html'),
            filename: 'index.html',
            hash: true,
            minify: {
                removeAttributeQuotes: false,
                collapseWhitespace: false,
            },
        }),
        new webpack.BannerPlugin('版权说明'),
        new webpack.DllReferencePlugin({
            manifest: path.resolve('./src/dll','manifest.json'),
        }),
        new HappyPack({
            id: 'js',
            use:  ['babel-loader'],
        }),
        new TestPlugin(),
        new TestPlugin2()
    ]
}
