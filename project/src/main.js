/*
 * @Description: 
 * @version: 1.0.0
 * @Author: changhaotian6@163.com
 * @Date: 2023-06-14 12:56:40
 * @LastEditors: changhaotian6@163.com
 * @LastEditTime: 2023-06-14 14:11:41
 * @FilePath: \project\src\main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './styles/reset.css'
const app = createApp(App)


app.use(router)
app.mount('#app')