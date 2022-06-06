"use strict";

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm-psword"),
    registerBtn = document.querySelector("button");

registerBtn.addEventListener("click", register)
function register() {
    if (!id.value) return alert("아이디를 입력해주세요.")
    if (psword.value !== confirmPsword.value){
        return alert("비밀번호가 일치하지 않습니다.")
    }

    // req라는 객체를 만들어 id, pw값을 넣어준다.
    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,
    };

    // 값을 잘 받아 온것을 확인할 수 있다.
    // console.log(req)

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        // .then(console.log)
        // .then((res) => console.log(res))
        // 파라미터 값을 생략하고 함수만 써줘도 된다.
        .then((res) => {
            if (res.success) {
                location.href = "/login";
            } else {
                alert(res.msg);
            }
        })
        // 예외 처리
        .catch((err) => {
            console.error("회원가입 중 에러 발생");
        })
}