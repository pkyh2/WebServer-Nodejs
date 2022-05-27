"use strict";

const express = require("express");
const router = express.Router();

//home.crtl 모듈을 불러온다.
const ctrl = require("./home.ctrl")

// render경로
router.get("/", ctrl.home)
router.get("/login", ctrl.login)

// router를 외부로 내보내는 명령
module.exports = router;