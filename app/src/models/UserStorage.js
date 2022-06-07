"use strict";

const fs = require("fs").promises

class UserStorage{

    // 가독성을 위해 은닉화 메서드를 만들어 주었다.
    static #getUserInfo(data, id) {
        const users = JSON.parse(data)
        const idx = users.id.indexOf(id)
        // users의 key값을 list로 받아온다. ex) [id, psword, name]
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx]
            return newUser
        }, {})
        return userInfo;
    }

    static getUsers(...fields) {
        // const users = this.#users
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {})
        return newUsers;
    }

    static getUserInfo(id) {
        return fs
            .readFile("./src/databases/users.json")
            .then((data) => {
                return this.#getUserInfo(data, id)
        })
            .catch(console.error);
        
    }

    static save(userInfo) {
        // const users = this.#users;
        users.id.push(userInfo.id)
        users.name.push(userInfo.name)
        users.psword.push(userInfo.psword)
        // 메서드에서 리턴값을 내보내니까 함수에서도 리턴값을 받는 변수를 생성한다.
        return {success: true}
    }

}

module.exports = UserStorage;