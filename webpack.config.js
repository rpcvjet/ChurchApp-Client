'use strict';

const dotenv = require('dotenv')

const path = require('path');
const webpack = require('webpack')
const CleanPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//conditionally loads and extra JS modules that merges in with base set of config items
//returns webpack.production or webpack.development
const presetConfig = require("./build-utils/loadPresets");

dotenv.load();

module.exports =  {
        mode: process.env.NODE_ENV,
        entry: `${__dirname}/src/index.js`,
        output: {
            path: `${__dirname}/build`,
            filename: "bundle.js",
        },
        devtool: 'cheap-module-source-map',
        module: {
            rules: [
                {
                    test: /\.(png|jpe?g$|gif|ico)$/i,
                    use: [{
                            loader: "url-loader",
                            options: {
                                limit: 5000
                            }
                        }]
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, "css-loader"] 
                }
            ]
        },
        plugins: [
            new CleanPlugin(['dist']),
            new HtmlWebpackPlugin({
                template: './public/index.html',
                filename: "index.html"
            }), 
            new webpack.ProgressPlugin(),
            new MiniCssExtractPlugin(),
            new webpack.DefinePlugin({ API_URL: JSON.stringify(process.env.API_URL)})
        ],
        optimization: {
            splitChunks: {
              chunks: 'all'
             }
          }

}
