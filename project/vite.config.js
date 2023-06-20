/*
 * @Description:
 * @version: 1.0.0
 * @Author: changhaotian6@163.com
 * @Date: 2023-06-14 12:56:40
 * @LastEditors: changhaotian6@163.com
 * @LastEditTime: 2023-06-20 23:00:30
 * @FilePath: \project\vite.config.js
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import cesium from "vite-plugin-cesium";
import { visualizer } from "rollup-plugin-visualizer";
import path from "path";
import viteCompression from "vite-plugin-compression";
import viteImagemin from "vite-plugin-imagemin";
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0", // ip地址
    port: "8000", // 服务启动端口号
    open: true, // 服务器启动时自动打开浏览器
  },
  plugins: [
    vue(),
    cesium(),
    visualizer({ open: true }),
    ,
    // 图片压缩
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox",
          },
          {
            name: "removeEmptyAttrs",
            active: false,
          },
        ],
      },
    }),
  ],
  resolve: {
    // 配置路径别名
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/base.scss";`, // 全局sass
      },
    },
  },
  envPrefix: "VUE_APP_", // 自定义env变量命名规则
  build: {
    terserOptions: {
      compress: {
        drop_console: true, // 删除console
        drop_debugger: true, // 删除debugger
      },
    },
    output: {
      output: {
        chunkFileNames: "js/[name]-[hash].js", // 引入文件名的名称
        entryFileNames: "js/[name]-[hash].js", // 包的入口文件名称
        assetFileNames: "[ext]/[name]-[hash].[ext]", // 资源文件像 字体，图片等
      },
      // 分包
      manualChunks(id) {
        if (id.includes("node_modules")) {
          // 让每个插件都打包成独立的文件
          return id
            .toString()
            .split("node_modules/")[1]
            .split("/")[0]
            .toString();
        }
      },
    },
    rollupOptions: {
      plugins: [
        // gzip压缩
        viteCompression({
          verbose: true, // 是否在控制台中输出压缩结果
          disable: false,
          threshold: 10240, // 如果体积大于阈值，将被压缩，单位为b，体积过小时请不要压缩，以免适得其反
          algorithm: "gzip", // 压缩算法，可选['gzip'，' brotliccompress '，'deflate '，'deflateRaw']
          ext: ".gz",
          deleteOriginFile: false, // 源文件压缩后是否删除
        }),
      ],
    },
  },
});
