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

    static #getUsers(data, isAll, fields){
      const users = JSON.parse(data)
      if (isAll) return users;
      
      const newUsers = fields.reduce((newUsers, field) => {
        if (users.hasOwnProperty(field)) {
            newUsers[field] = users[field];
        }
        return newUsers;
      }, {})
      return newUsers;
    }

    static getUsers(isAll, ...fields) {
        return fs
            .readFile("./src/databases/users.json")
            .then((data) => {
                return this.#getUsers(data, isAll, fields);
        })
            .catch(console.error);
    }

    static getUserInfo(id) {
        return fs
            .readFile("./src/databases/users.json")
            .then((data) => {
                return this.#getUserInfo(data, id);
        })
            .catch(console.error);
        
    }

    static async save(userInfo) {
        const users = await this.getUsers(true) //인자를 true로 줘서 모든 값을 다 받아오겠다는 의미
        // 입력받은 전체 데이터를 그대로 json파일에 write하니까 다 변경된다.
        // 따라서 새로 입력받은 정보만 추가할수 있게 한다.
        
        if (users.id.includes(userInfo.id)) {
          throw "이미 존재하는 아이디 입니다."
        }
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);

        fs.writeFile("./src/databases/users.json", JSON.stringify(users))
        
        return {success: true}
    }

}

module.exports = UserStorage;