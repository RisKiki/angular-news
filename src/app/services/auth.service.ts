import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  static getToken() : string {
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZmNmZGU5NmQxZGIyODc2MjkyMWM0NDIiLCJpYXQiOjE2MTE0ODA2NzZ9.MkjD5LaBpcso3rgVr3EeROyMsayMS5mnbMcGCGgTnlo'
  }
}
