
const  path = require('path');

const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry:{
        'hello-world':'./src/hello-world.js',
        'tools-image':'./src/tools-image.js'
    },
    output:{
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'./dist'),
        publicPath:""
    },
    mode:"development",
    devServer:{
        contentBase:path.resolve(__dirname,'./dist'),
        index:'index.html',
        port:5000
    },
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
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
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
            {
                test: /\.(woff2|woff|ttf)$/,
                use: [{
                    loader:'file-loader',
                    options:{
                        name:'[name].[ext]',
                        outputPath:'fonts/'
                    }
                }]
            },
        ]
    },
    plugins:[
       new CleanWebpackPlugin(),
       new HtmlWebpackPlugin({
        filename: 'hello-world.html',
        title: 'Hello World',
        chunks:['hello-world','vendors~hello-world~tools-image'],
        minify: false,
        template: 'src/index.hbs',
        meta:{
            description: 'Hello world',
        }
    }),
    new HtmlWebpackPlugin({
        filename: 'tools-image.html',
        chunks:['tools-image','vendors~hello-world~tools-image'],
        title: 'Hello Tools',
        minify: false,
        template: 'src/index.hbs',
        meta:{
            description: 'Hello Tools',
        }
    })
    ]
}