import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUser : User    = new User();
  logged      : boolean = false;

  constructor() { }

  setCurrentUser(user : User) : void {
    this.currentUser = user;
  }

  getCurrentUser() : User {
    return this.currentUser;
  }

  isLogged() : boolean {
    return this.logged;
  }
  
  setLogged(bol : boolean) : void {
    this.logged = bol
  }
}
