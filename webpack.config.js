/**
 * Created by henry on 16/3/21.
 * 开发环境的配置文件
 */
const path = require('path');
const webpack = require('webpack');
const config = {
    entry: {
        bundle:[
            'webpack-dev-server/client?http://localhost:8080',
            "webpack/hot/only-dev-server",
             './src/js/router.js'
        ]
    },
    output: {
        path: path.resolve(__dirname,"dev"),
        filename: '[name].js',
        chunkFilename: '[name].js'
    },

    resolve: {
        alias: {
            'jquery': path.resolve("", './lib/jquery.min.js')
        }

    },
    module: {
        rules: [
            {
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
                use: [ "style-loader","css-loader", "less-loader"]
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
    plugins:[
        new webpack.ProvidePlugin({            //全局jquery
            $: 'jquery'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        contentBase: path.resolve(__dirname,"dev")
    },
};
module.exports = config;

