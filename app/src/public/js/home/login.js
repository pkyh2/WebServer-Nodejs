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
    })
        .then((res) => res.json())
        // .then(console.log);
        // .then((res) => console.log(res));
        // 파라미터 값을 생략하고 함수만 써줘도 된다.
        .then((res) => {
            if (res.success) {
                location.href = "/";
            } else {
                alert(res.msg);
            }
        })
        // 예외 처리
        .catch((err) => {
            console.error("로그인 중 에러 발생");
        })
}