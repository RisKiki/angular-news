export class User {

    name    : string;
    email   : string;
    password: string;

    constructor(
        _name?    : string,
        _email?   : string,
        _password?: string
    )

    constructor(
        _name    : string,
        _email   : string,
        _password: string
    ){
        this.name     = _name;
        this.email    = _email;
        this.password = _password;
    }

    static asUser(json : any) : User {
        return new User(
            json['name'],
            json['email'],
            json['password']
        )
    }

}
