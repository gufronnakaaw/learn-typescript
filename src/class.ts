// abstract
abstract class Main {
    abstract done: boolean;
}

// class
class User extends Main {
    // properties
    id: number;
    firstname: string;
    lastname: string;
    protected isLogin: boolean;
    private token: string;
    private retryLogin = 0;

    static MAX_FAILED_LOGIN = 4;
    done: boolean;

    // method
    constructor(
        id: number,
        firstname: string,
        lastname: string,
        isLogin: boolean
    ) {
        super();
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.isLogin = isLogin;
        this.token = '';
        this.done = false;
    }

    login(username: string, password: string): boolean | string {
        this.retryLogin += 1;

        if (username == 'admin' && password == 'admin') {
            return true;
        }

        if (this.retryLogin >= User.MAX_FAILED_LOGIN) {
            return 'max login attempted';
        }

        return false;
    }

    getID(): number {
        return this.id;
    }

    getToken(): string {
        return this.token;
    }
}

const user1 = new User(1, 'first', 'last', true);
// console.log(user1.login('', ''));

// access modifier & sub classs
class Test extends User {
    constructor(
        id: number,
        firstname: string,
        lastname: string,
        isLogin: boolean
    ) {
        super(id, firstname, lastname, isLogin);
    }

    getStatus(): boolean {
        return this.isLogin;
    }
}

const testing = new Test(12, 'pertama', 'terakhir', false);
// console.log(testing.getStatus());
