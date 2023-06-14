/*
 * @Description:
 * @version: 1.0.0
 * @Author: changhaotian6@163.com
 * @Date: 2023-06-14 12:56:40
 * @LastEditors: changhaotian6@163.com
 * @LastEditTime: 2023-06-14 15:02:51
 * @FilePath: \project\vite.config.js
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import cesium from "vite-plugin-cesium";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: "0.0.0.0", // ip地址
        port: "8000", // 服务启动端口号
        open: true, // 服务器启动时自动打开浏览器
    },
    plugins: [vue(), cesium()],
    resolve: {
        // 配置路径别名
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@/styles/base.scss";`,
            },
        },
    },
});
