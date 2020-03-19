const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack')

module.exports = {
    mode: "production",
    entry: {
        app: './src/js/index.js',
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(process.cwd(), 'public')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: [
                            require.resolve('@babel/preset-react'),
                            [require.resolve('@babel/preset-env'), { modules: false }],
                        ],
                        plugin:['@babel/plugin-proposal-class-properties'],
                        cacheDirectory: true
                    }
                }
            },
            {
                test: /\.js$/,
                use: ['eslint-loader'],
                exclude: [/node_modules/],
                enforce: 'pre'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HashedModuleIdsPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(process.cwd(), 'src/js/index.html'),
            filename: 'index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            },
            title: 'Buy It!'
        }),
        new ExtractTextPlugin("styles.css"),
    ],
    optimization: {
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                }
            }
        }
    }
};