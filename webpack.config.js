const path = require('path');
const Dotenv = require('dotenv-webpack');
const webpackNodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';

const paths = {
  OUTPUT: path.resolve(__dirname, 'build'),
};

const plugins = isProduction ? [] : [
  new NodemonPlugin({ legacyWatch: true }),
  new Dotenv({ path: './.env', systemvars: true }),
];

module.exports = {
  entry: {
    bundle: './src',
  },
  target: 'node',
  node: {
    __filename: true,
    __dirname: true,
  },
  output: {
    path: paths.OUTPUT,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@Application': path.resolve(__dirname, './src/application/'),
      '@Common': path.resolve(__dirname, './src/common/'),
      '@Config': path.resolve(__dirname, './src/application/config/'),
      '@Domain': path.resolve(__dirname, './src/domain/'),
      '@Adapters': path.resolve(__dirname, './src/common/adapters/'),
      '@Base': path.resolve(__dirname, './src/'),
    },
  },
  plugins,
  externals: [webpackNodeExternals()],
  mode: process.env.NODE_ENV,
  devtool: isDevelopment && 'source-map',
};
