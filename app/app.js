"use strict";
// module
const express = require("express")
const bodyParser = require("body-parser")
const app = express();

// routing 현재 routes home 폴더에 있는 js파일을 불러오라
const home = require("./src/routes/home")

// App
app.set("views", "./src/views");
app.set("view engine", "ejs")
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
//URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({extended: true}))


app.use("/", home); // 미들웨어를 등록해주는 메서드

module.exports = app