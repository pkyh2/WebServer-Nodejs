"use strict";

const { response } = require("express");
const User = require("../../models/User")

const view = {
    home: (req, res) => {
        res.render("home/index")
    },
    
    login: (req, res) => {
        res.render("home/login")
    },

    register: (req, res) => {
        res.render("home/register")
    },
};



const process = {
    login: async (req, res) => {
        // const id = req.body.id,
        //     psword = req.body.psword;

        const user = new User(req.body)
        const response = await user.login()
        return res.json(response)

        // // 로그인 검증이니까 인자값으로 "id", "psword" 가 꼭 필요!
        // const users = UserStorage.getUsers("id", "psword")

        // // 직접 넣은 객체를 변수로 만들어서 대입
        // const response = {};

        // if (users.id.includes(id)) {
        //     // id값의 index를 idx에 넣는다.
        //     const idx = users.id.indexOf(id);
        //     // 해당 index에 맞는 psword값이 입력한 ps랑 같으면
        //     if (users.psword[idx] === psword) {
        //         response.success = true;
        //         return res.json(response);
        //     }
        // }
        
        // response.success = false;
        // response.msg = "로그인에 실패하였습니다.";
        // return res.json(response);      
    },

    register: async (req, res) => {
        const user = new User(req.body)
        const response = await user.register()
        return res.json(response)
    }

    
};

// json 형태로 내보내는데 key값만 입력하면 value값은 key와 똑같은 값으로 입력된다.
module.exports = {
    view,
    process

};