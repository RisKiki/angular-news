import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscribable } from 'rxjs';
import { URL_API } from '../tools/constants';

@Injectable({
  providedIn: 'root'
})
export class RequestApiService {

  constructor(
    private httpClient : HttpClient
  ) { }

  get(route : string) : Subscribable<Object> {
    return this.httpClient.get(URL_API+route)
  }

  post(route : string, body : Object) : Subscribable<Object> {
    return this.httpClient.post(URL_API+route, body);
  }
}
