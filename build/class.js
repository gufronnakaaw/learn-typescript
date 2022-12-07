"use strict";
// abstract
class Main {
}
// class
class User extends Main {
    // method
    constructor(id, firstname, lastname, isLogin) {
        super();
        this.retryLogin = 0;
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.isLogin = isLogin;
        this.token = '';
        this.done = false;
    }
    login(username, password) {
        this.retryLogin += 1;
        if (username == 'admin' && password == 'admin') {
            return true;
        }
        if (this.retryLogin >= User.MAX_FAILED_LOGIN) {
            return 'max login attempted';
        }
        return false;
    }
    getID() {
        return this.id;
    }
    getToken() {
        return this.token;
    }
}
User.MAX_FAILED_LOGIN = 4;
const user1 = new User(1, 'first', 'last', true);
// console.log(user1.login('', ''));
// access modifier & sub classs
class Test extends User {
    constructor(id, firstname, lastname, isLogin) {
        super(id, firstname, lastname, isLogin);
    }
    getStatus() {
        return this.isLogin;
    }
}
const testing = new Test(12, 'pertama', 'terakhir', false);
// console.log(testing.getStatus());
