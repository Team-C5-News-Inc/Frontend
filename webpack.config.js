//import webpack plugins
const HtmlWebPackPlugin = require('html-webpack-plugin');

//css rules
const cssRules = {
  test: /\.css$/i,
  use: ['style-loader', 'css-loader'],
};

//babel rules
const babelRules = {
  test: /\.(js)$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
};

//export config
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.[contentHash].js',
  },
  module: {
    rules: [babelRules, cssRules],
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'marketing site',
      template: './public/index.html',
    }),
  ],
  devServer: {
    port: 3000,
  },
};
