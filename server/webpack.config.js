require('@babel/polyfill');

const path = require('path');
const Dotenv = require('dotenv-webpack');
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = [
  {
    entry: ['@babel/polyfill', './src/index.js'],
    target: 'node',
    mode: 'development',
    output: {
      filename: 'server.js',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      alias: {
        src: path.resolve(__dirname, 'src'),
      }
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime']
            }
          }
        }
      ]
    },
    plugins: [
      new NodemonPlugin(),
      new Dotenv()
    ]
  }
]
