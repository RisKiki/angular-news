import { Injectable } from '@angular/core';
import { RequestApiService } from './request-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  static tokenApi    : string = '';
  private emailApi    : string = 'user1@user1';
  private passwordApi : string = 'user1@user1';

  constructor(
    private requestApiService : RequestApiService
  ) {}

  static getToken() : string {
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZmNmZGU5NmQxZGIyODc2MjkyMWM0NDIiLCJpYXQiOjE2MTE0ODA2NzZ9.MkjD5LaBpcso3rgVr3EeROyMsayMS5mnbMcGCGgTnlo'
  }
}
