'use strict';
/* global __dirname, process */

const webpack           = require('webpack');
const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin       = require('clean-webpack-plugin');
const environmentsFile  = require('./environments.json');
const appPath           = path.join(__dirname, 'app');
const distPath          = path.join(__dirname, 'dist');
const exclude           = /node_modules/;

function getENVReplacements() {
  const replacements = environmentsFile[process.env.NODE_ENV];
  let result         = {};

  Object.keys(replacements)
    .forEach((key) => result[key] = JSON.stringify(replacements[key]));

  return result;
}

const config = {

  // set the context (optional)
  context: path.join(__dirname, '/app'),
  entry: {
    app: 'app.js',
    vendor: ['angular', 'angular-ui-router'],
  },

  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.[hash].js',
  },

  plugins: [
    new CleanPlugin(['dist']),
    new webpack.NoErrorsPlugin(),

    new HtmlWebpackPlugin({
      inject: 'body',
      template: 'app/index.html',
    }),
    new webpack.DefinePlugin(getENVReplacements()),
  ],

  // enable loading modules relatively (without the ../../ prefix)
  resolve: {
    root: [path.join(__dirname, '/app')],
  },

  module: {
    loaders: [

      // Transpile ES6 and annotate AngularJS dependencies
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'ng-annotate',
          'babel'
        ]
      },

      // SCSS
      {
        test: /\.s?css$/,
        loaders: [
          'style',
          'css',
          'autoprefixer',
          'sass?includePaths[]=' + path.join(__dirname, '/app')
        ]
      },
      //  LESS
      {
        test: /\.less$/,
        loaders: [
          'style',
          'css',
          'autoprefixer',
          'less'
        ]
      },

      // JSON
      {
        test: /\.json$/,
        loader: 'json'
      },

      // Fonts and images
      {
        test: /\.(ttf|eot|svg|otf|png)(\?.*$|$)$/,
        loader: 'file'
      },
      {
        test: /\.(png)$/,
        loader: 'url?mimetype=image/png'
      },
      {
        test: /\.woff(2)?(\?.*$|$)$/,
        loader: 'url?limit=10000&minetype=application/font-woff'
      },

      // Create AngularJS templates from HTMLs
      {
        test: /\.html$/,
        loaders: [
          'ngtemplate?relativeTo=' + path.join(__dirname, '/app'),
          'html'
        ]
      },
      {
        test: require.resolve('jquery'),
        loader: 'expose?jQuery'
      },
    ]
  },

  devServer: {
    contentBase: './app',
    noInfo: false,
    hot: true,
    inline: true,
    historyApiFallback: true
  }

};

if (process.env.NODE_ENV === 'development') {
  config.devtool = '#inline-source-map';
}

if (process.env.NODE_ENV !== 'test') {
  config.plugins.push(
    new webpack.optimize.CommonsChunkPlugin(
      /* chunkName: */ 'vendor',
      /* filename: */ 'vendor.[hash].js'
    )
  );
}

module.exports = config;
