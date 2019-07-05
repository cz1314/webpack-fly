const webpack = require('webpack')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
// plugin 可以在webpack运行到某个时刻自动干一些事情

  // presets: [["@babel/preset-env", {
      //写业务代码
  //   targets: {
  //     chrome: "67",
  //   },
  //   useBuiltIns: 'usage'
  // }]]
const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map', // 开发环境推荐
  // devtool: 'cheap-module-source-map',//生产
  devServer: {
    contentBase: './dist',
    open: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    usedExports: true
  }
}


module.exports = merge(commonConfig, devConfig)