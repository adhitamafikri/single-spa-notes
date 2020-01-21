const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HomeAliases = require('./src/services/Home/aliases')

module.exports = {
  mode: 'development',
  entry: {
    // Set the single-spa config as the project entry point
    'single-spa.config': path.resolve(__dirname, 'single-spa.config.js'),
  },
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: '[name].[contentHash].js',
    chunkFilename: '[name].[contentHash].js',
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
      ...HomeAliases
    },
    modules: [path.resolve(__dirname, 'node_modules')],
  },
  plugins: [
    // A webpack plugin to remove/clean the output folder before building
    new CleanWebpackPlugin(),
    // Generate html
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'index.html')
    })
  ],
  devtool: 'source-map',
  externals: [],
  devServer: {
    index: path.resolve(__dirname, 'public/dist/index.html'),
    contentBase: path.join(__dirname, 'public/dist'),
    compress: false,
    writeToDisk: true,
    open: 'Google Chrome',
    port: 4008,
    historyApiFallback: true    
  }
};
