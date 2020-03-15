const path = require('path');
var webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: '../src/js/App.js',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            }, {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    }
};