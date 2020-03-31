
const  path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry:"./src/index.js",
    output:{
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname,'./dist'),
        publicPath:""
    },
    mode:"development",

    module:{
        rules:[
            {
                test: /\.(png|jpg)$/,
                use:[
                    {
                        loader:'file-loader',
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                exclude:/node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options:{
                        presets:['@babel/env'],
                        plugins:['transform-class-properties']
                    }
                }]
            },
            {
                test: /\.hbs$/,
                use: ['handlebars-loader']
            },
        ]
    },
    plugins:[
        new TerserPlugin(),
        new MiniCssExtractPlugin({
            filename:'styles.[contenthash].css'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'hello-world.html',
            title: 'Hello Webpack',
            
            template: 'src/index.hbs',
            meta:{
                description: 'Hello world',
            }
        })
    ]
}