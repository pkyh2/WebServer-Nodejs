"use strict";

const view = {
    home: (req, res) => {
        res.render("home/index")
    },
    
    login: (req, res) => {
        res.render("home/login")
    },
};

const users = {
    id: ["pkyh2", "EcoNFT", "김팀장"],
    psword: ["1234", "1234", "1234456"]
}

const process = {
    login: (req, res) => {
        const id = req.body.id,
            psword = req.body.psword;

        if (users.id.includes(id)) {
            // id값의 index를 idx에 넣는다.
            const idx = users.id.indexOf(id);
            // 해당 index에 맞는 psword값이 입력한 ps랑 같으면
            if (users.psword[idx] === psword) {
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패하였습니다."
        });      
    },
};

// json 형태로 내보내는데 key값만 입력하면 value값은 key와 똑같은 값으로 입력된다.
module.exports = {
    view,
    process

};