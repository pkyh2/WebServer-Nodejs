"use strict";
// module
const express = require("express")
const app = express();

// routing 현재 routes home 폴더에 있는 js파일을 불러오라
const home = require("./src/routes/home")

// App
app.set("views", "./src/views");
app.set("view engine", "ejs")
app.use(express.static(`${__dirname}/src/public`));

app.use("/", home); // 미들웨어를 등록해주는 메서드

module.exports = app