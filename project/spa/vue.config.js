const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  configureWebpack: {
    plugins: [
      new LodashModuleReplacementPlugin(),
      new BundleAnalyzerPlugin()
    ]
  }
}
