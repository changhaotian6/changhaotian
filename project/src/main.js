/*
 * @Description:
 * @version: 1.0.0
 * @Author: changhaotian6@163.com
 * @Date: 2023-06-14 12:56:40
 * @LastEditors: changhaotian6@163.com
 * @LastEditTime: 2023-06-16 23:12:50
 * @FilePath: \project\src\main.js
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import commonFun from "./utils/commonFun";
import "./styles/reset.css";
// 引入阿里云字体js
import './assets/iconfont/iconfont/iconfont.js';
import SvgIcon from '@/components/common/SvgIcon/index.vue'

import pinia from "./store";


const app = createApp(App);
app.component('SvgIcon',SvgIcon)
app.use(pinia);
app.use(router);
app.use(commonFun);
app.mount("#app");
