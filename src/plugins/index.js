/** @format */

import ElementPlus from 'element-plus'
import zhLocale from 'element-plus/lib/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import * as icons from '@element-plus/icons-vue'
import { installI18n } from '@/i18n'
import '@/assets/icon'
/**
 * 安装插件
 * @param {*} app vue实例
 */
export function installPlugins(app) {
  // 安装element-ui
  app.use(ElementPlus, {
    locale: zhLocale,
    size: 'small',
  })
  for (var icon in icons) {
    app.component(icon, icons[icon])
  }
  installI18n(app)
}
