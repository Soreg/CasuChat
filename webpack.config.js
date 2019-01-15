const path = require('path');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');


module.exports = {
   entry: './main.js',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index_bundle.js'
   },
   devServer: {
      inline: true,
      port: 8080
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            resolve: {
                extensions: [".jsx", ".js"]
            },
         },
         {
            test: /\.css?$/,
            include: /node_modules/,  
            loaders: ['style-loader', 'css-loader'],
            resolve: {
                extensions: [".css"]
            },
         }
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
            template: resolve(__dirname, 'index.html'),
            filename: './index.html'
      }),
      new Dotenv(),
   ]
}