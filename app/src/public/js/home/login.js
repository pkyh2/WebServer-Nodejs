"use strict";

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login)
function login() {
    // req라는 객체를 만들어 id, pw값을 넣어준다.
    const req = {
        id: id.value,
        psword: psword.value,
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    }).then((res) => console.log(res.json()));
    // console.log(JSON.stringify(req));
}