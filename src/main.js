/** @format */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { installPlugins } from '../src/plugins'
import { installStore } from '../src/store'
import { installRouter } from '../src/router'

const app = createApp(App).use(store).use(router)
// 安装插件
installPlugins(app)
// 安装VUex
installStore(app)
// 安装路由
installRouter(app)
app.mount('#app')
