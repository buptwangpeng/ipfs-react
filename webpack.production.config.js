/**
 * Updated by HuangJinYu on 17/6/23.
 * 发布环境的配置文件
 */

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        bundle: path.resolve(__dirname, './src/js/router.js'),
        common: ['react','react-dom','react-router','./src/css/bootstrap.css'] //分离第三方库
    },
    output: {
        path: path.join(__dirname, 'assets'),
        publicPath: '/assets/',//bundle.js的输出路径
        filename: '[name].[hash].js'
    },
    resolve: {
        alias: {
            'jquery': path.resolve("", './lib/jquery.min.js')
        }
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin(), //去掉空格
        new webpack.ProvidePlugin({            //全局jquery
            $: 'jquery'
        }),
        new webpack.optimize.CommonsChunkPlugin('common')
    ],
    module: {
        rules:
            [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'react-hot-loader'
                },
                    {
                        loader: "babel-loader",

                        options: {
                            presets: ['es2015', 'stage-0', 'react'],
                            plugins: ['transform-decorators-legacy']
                        }
                    }],
            }, {
                test: /images/,
                exclude: /node_modules/,
                use: [{loader: "file-loader"}]
            }, {
                test: /\.(png|jpg|svg|gif)$/,
                use: [{loader: "url-loader?limit=8192"}]
            }, {
                test: /.less$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "less-loader"]
            }, {
                test: /icons/,
                exclude: /node_modules/,
                use: [{loader: 'url-loader'}]
            }, {
                test: /\.css$/,
                // exclude: /node_modules/,
                use: ["style-loader", "css-loader"]
            }]
    },
}
