//import webpack plugins
const HtmlWebPackPlugin = require('html-webpack-plugin');

//css rules
const cssRules = {
  test: /\.styl$/i,
  use: ['style-loader', 'css-loader', 'stylus-loader'],
};

//images rules
const imgRules = {
  test: /\.(jpg|png|svg)$/,
  use: {
    loader: 'url-loader',
    options: {
      limit: 90000,
    }
  }
}

//babel rules
const babelRules = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
};

//export config
module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.[contentHash].js',
  },
  module: {
    rules: [babelRules, cssRules, imgRules],
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'NEWS INC',
      template: './public/index.html',
    }),
  ],
  devServer: {
    port: 3000,
  },
};
