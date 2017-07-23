'use strict';

const eslintFriendlyFormatter = require('eslint-friendly-formatter');
const path = require('path');
const webpack = require('webpack');

const ROOT = path.join(__dirname, '..');

module.exports = {
  devtool: '#source-map',

  entry: [path.join(ROOT, 'src', 'index.js')],

  externals: {
    glamor: {
      amd: 'glamor',
      commonjs: 'glamor',
      commonjs2: 'glamor',
      root: 'glamor'
    },
    moize: {
      amd: 'moize',
      commonjs: 'moize',
      commonjs2: 'moize',
      root: 'moize'
    },
    react: {
      amd: 'react',
      commonjs: 'react',
      commonjs2: 'react',
      root: 'React'
    }
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        include: [path.join(ROOT, 'src')],
        loader: 'eslint-loader',
        options: {
          configFile: '.eslintrc',
          failOnError: true,
          failOnWarning: false,
          fix: true,
          formatter: eslintFriendlyFormatter
        },
        test: /\.js$/
      },
      {
        include: [path.join(ROOT, 'src')],
        loader: 'babel-loader',
        options: {
          babelrc: false,
          cacheDirectory: true,
          presets: [
            ['env', {
              loose: true,
              modules: false
            }],
            'react',
            'stage-2'
          ]
        },
        test: /\.js$/
      }
    ]
  },

  output: {
    filename: 'flexor.js',
    library: 'Flexor',
    libraryTarget: 'umd',
    path: path.join(ROOT, 'dist'),
    umdNamedDefine: true
  },

  plugins: [new webpack.EnvironmentPlugin(['NODE_ENV'])]
};
