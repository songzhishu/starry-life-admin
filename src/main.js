/*
 * @Author: lihailong lihailong@hdkj123.com
 * @Date: 2024-10-15 14:22:46
 * @LastEditors: lihailong lihailong@hdkj123.com
 * @LastEditTime: 2024-10-15 15:29:52
 * @FilePath: \starry-life-admin\src\main.js
 * @Description:
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.mount('#app')
