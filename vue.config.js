/** @format */

const { defineConfig } = require('@vue/cli-service')
/**
 * @description webpack配置文件
 */

const path = require('path')
const resolve = (dir) => {
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack() {
    return {
      resolve: {
        // 声明别名
        alias: {
          '@': resolve('src'),
          '*': resolve(''),
        },
      },
    }
  },
  chainWebpack(config) {
    config.resolve.symlinks(true)
    // 添加图标库
    config.module.rule('svg').exclude.add(resolve('src/assets/icon')).end()
    config.module
      .rule('icon')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icon'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ symbolId: 'icon-[name]' })
      .end()
  },
  runtimeCompiler: true,
  productionSourceMap: false,
}
