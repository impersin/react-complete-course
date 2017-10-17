const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname, // refers root directory of the project
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',  
    './js/ClientApp.jsx'
  ],
  devtool: 'cheap-eval-scource-map',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  devServer: {
    hot: true,
    publicPath: '/public/', // static path for server
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin,
    new webpack.NamedChunksPlugin()
  ],
  module: {
    rules: [
      {
        enforce: 'pre', // ensureing this is running before babel
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      }
    ]
  }
};