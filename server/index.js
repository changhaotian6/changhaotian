/*
 * @Description:
 * @version: 1.0.0
 * @Author: changhaotian6@163.com
 * @Date: 2023-06-20 15:19:29
 * @LastEditors: changhaotian6@163.com
 * @LastEditTime: 2023-06-20 17:21:54
 * @FilePath: \server\index.js
 */
//首先加载express
const express = require("express");
const compression = require("compression");
const path = require("path");
const app = express();
//端口号
const port = 3000;

// var history = require('connect-history-api-fallback');
// app.use(express.static("/dist"));
// 这行代码 一定要写到 静态资源托管之前
app.use(compression());
app.use(express.static(path.join(__dirname, "dist")));
// app.use(history());

app.listen(port, () => console.log("server is start, port is", port));
