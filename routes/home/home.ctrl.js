"use strict";

const home = (req, res) => {
    res.render("home/index")
    console.log(typeof(req));
    // console.log(JSON.stringify(req.socket));
    // console.log(req._header);
    console.log(req.socket.res);
    console.log(res);
}

const login = (req, res) => {
    res.render("home/login")
    console.log("login debug")
}

// json 형태로 내보내는데 key값만 입력하면 value값은 key와 똑같은 값으로 입력된다.
module.exports = {
    home,
    login,
};