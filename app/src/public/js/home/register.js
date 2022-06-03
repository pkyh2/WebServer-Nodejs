"use strict";

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm-psword"),
    registerBtn = document.querySelector("#button");
    console.log("hello register")

registerBtn.addEventListener("click", register)
function register() {
    // req라는 객체를 만들어 id, pw값을 넣어준다.
    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,
        confirmPsword: confirmPsword.value,
    };
    console.log(req)

    // fetch("/register", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(req),
    // })
    //     .then((res) => res.json())
    //     // .then(console.log);
    //     // .then((res) => console.log(res));
    //     // 파라미터 값을 생략하고 함수만 써줘도 된다.
    //     .then((res) => {
    //         if (res.success) {
    //             location.href = "/";
    //         } else {
    //             alert(res.msg);
    //         }
    //     })
    //     // 예외 처리
    //     .catch((err) => {
    //         console.error("로그인 중 에러 발생");
    //     })
}