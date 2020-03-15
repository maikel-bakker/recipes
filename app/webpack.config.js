require('@babel/polyfill');

const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackRootPlugin = require('html-webpack-root-plugin')

module.exports = [
  {
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
      filename: 'app.js',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      alias: {
        app: path.resolve(__dirname, './'),
        src: path.resolve(__dirname, 'src')
      }
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            },
            'eslint-loader'
          ]
        },
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader'
        }
      ]
    },
    devServer: {
      host: '0.0.0.0',
      port: 9000
    },
    plugins: [
      new Dotenv(),
      new HtmlWebpackPlugin({
        meta: { viewport: 'width=device-width, initial-scale=1' }
      }),
      new HtmlWebpackRootPlugin()
    ]
  }
]
