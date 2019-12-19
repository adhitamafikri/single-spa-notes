const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: {
    // Set the single-spa config as the project entry point
    'single-spa.config': './single-spa.config.js',
  },
  output: {
    publicPath: '/dist/',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        // Webpack style loader added so we can use materialize
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.js$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
      }, {
        // This plugin will allow us to use AngularJS HTML templates
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html-loader',
      },
    ],
  },
  node: {
    fs: 'empty'
  },
  resolve: {
    alias: {
      '@services': path.resolve(__dirname, 'src/services'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@themes': path.resolve(__dirname, 'src/themes'),
    },
    modules: [path.resolve(__dirname, 'node_modules')],
  },
  plugins: [
    // A webpack plugin to remove/clean the output folder before building
    new CleanWebpackPlugin(),
  ],
  devtool: 'source-map',
  externals: [],
  devServer: {
    port: 4008,
    historyApiFallback: true    
  }
};