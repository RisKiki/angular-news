export class User {

    // name       : string;
    // firstname  : string;
    email   : string;
    password: string;

    constructor(
        // _name?      : string,
        // _firstname? : string,
        _email?   : string,
        _password?: string
    )

    constructor(
        // _name       : string,
        // _firstname  : string,
        _email   : string,
        _password: string
    ){
        // this.name      = _name;
        // this.firstname = _firstname;
        this.email    = _email;
        this.password = _password;
    }

}
