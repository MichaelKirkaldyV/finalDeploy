import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {}

  registerService(user){
  	console.log("Register in process..")
  	console.log(user)
  	return this._http.post('/api/register', user)
  }

  loginService(user){
    console.log("Logging in user..")
    console.log(user)
  	return this._http.post('/api/login', user)
  }

}
