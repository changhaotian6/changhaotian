/*
 * @Description: 
 * @version: 1.0.0
 * @Author: changhaotian6@163.com
 * @Date: 2023-06-14 13:48:17
 * @LastEditors: changhaotian6@163.com
 * @LastEditTime: 2023-06-15 22:22:39
 * @FilePath: \project\src\router\index.js
 */
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home/index.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      meta: {
        index: 1,
      },
    },
    {
      path: "/myself",
      name: "myself",
      component: () => import("@/views/Myself/index.vue"),
    },
  ],
});

export default router;
