const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.bundle.js',
    pathinfo: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react'],
          plugins: ['transform-runtime']
        }
      },
      {
        test: /\.css$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ sourcemap: false }),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'public/index.html',
      favicon: 'public/favicon.ico'
    }),
    // new webpack.HotModuleReplacementPlugin()
  ],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
}
