import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { RequestApiService } from './request-api.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUser : User    = new User();
  logged      : boolean = true;

  constructor(
    private requestApiService : RequestApiService
  ) {}

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

  login(
    email   : string,
    password: string
  ) : Promise<User> {
    const params = {
      email,
      password : password
    }

    return this.requestApiService.post('users/login', params)
    .then(
      (res : any) => {
        if (res.status.success) {
          const user : User = User.asUser(res.data)
          this.setCurrentUser(user);
          this.setLogged(true);
          return user
        }

        return Promise.reject(new Error('Password or Email wrong.'));
      }
    )
  }

  create(
    name    : string,
    email   : string,
    password: string
  ) : Promise<User> {
    const params = {
      name,
      email,
      password
    }
    return this.requestApiService.post('users/create',params)
    .then(
      (res : any) => {
        if (res.status.success) {
          const user : User = User.asUser(res.data)
          this.setCurrentUser(user);
          this.setLogged(true);
          return user
        }
          return Promise.reject(new Error("Email already exist"));
      } 
    ).catch(
      (err : any) => {
          return Promise.reject(new Error("Email already exist"));
      }
    )
  }
}
