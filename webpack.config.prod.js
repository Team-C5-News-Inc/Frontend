const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    reportFilename: 'bundle_sizes.html'
  })],
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-router-dom': 'ReactRouterDOM'
  }
})
