"use strict";

class UserStorage{
    static #users = {
        // 필드: 필드에 속하는 데이터들
        id: ["pkyh2", "EcoNFT", "김팀장"],  
        psword: ["1234", "1234", "1234456"],
        name: ["용현", "승희", "설아"]
    }

    static getUsers(...fields) {
        const users = this.#users
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {})
        return newUsers;
    }

}

module.exports = UserStorage;