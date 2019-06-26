var path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const fPackage = require('./package.json');
const webpack = require('webpack');
const description = `'${fPackage.name}, v${fPackage.version} - ${fPackage.description}, by ${fPackage.author}. Renders [application/vnd.francy+json] MIME Type on Jupyter Environments.'`;
const defaultPlugins = [
  new webpack.DefinePlugin({ VERSION: JSON.stringify(fPackage.version), FRANCY_DESC: description }),
  new webpack.BannerPlugin(description)
];

/* global __dirname */
/* eslint-disable no-console */
module.exports = (env = {}) => {

  console.log(`Running webpack for production environment? ${env.production}`);

  /**
   * Custom webpack loaders are generally the same for all webpack bundles, hence
   * stored in a separate local variable.
   */
  var loaders = [{
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          ['@babel/plugin-proposal-decorators', { 'legacy': true }],
          ['@babel/plugin-transform-classes', { 'globals': ['Error'] }]
        ]
      }
    }
  }, {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
  }];

  var base = {
    mode: env.production ? 'production' : 'development',
    stats: {
      colors: false,
      hash: true,
      timings: true,
      assets: true,
      chunks: true,
      chunkModules: true,
      modules: true,
      children: true,
    },
    output: {
      libraryTarget: 'amd',
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          parallel: true,
          uglifyOptions: {
            ecma: 6,
            compress: false
          }
        })
      ]
    },
    devtool: env.production ? '' : 'source-map',
    module: {
      rules: loaders
    },
    plugins: defaultPlugins,
    node: {
      fs: 'empty'
    }
  };

  return [
    /**
     * Notebook extension
     *
     * This bundle only contains the part of the JavaScript that is run on
     * load of the notebook. This section generally only performs
     * some configuration for requirejs, and provides the legacy
     * "load_ipython_extension" function which is required for any notebook
     * extension.
     */
    Object.assign({}, base, {
      entry: [path.join(__dirname, 'index.js')],
      output: Object.assign({}, base.output, {
        filename: 'index.js',
        path: path.join(__dirname, 'dist')
      })
    }),
    Object.assign({}, base, {
      entry: {
        Vendors: 'antlr4/index.js'
      },
      output: Object.assign({}, base.output, {
        filename: '[name].js',
        path: path.join(__dirname, 'dist')
      })
    })
  ];
};
/* eslint-enable no-console */
