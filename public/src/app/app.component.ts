import { Component, OnInit} from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  user: object;
  logUser: object;
  userSession: object;

  constructor(private _http: HttpService) { }

  ngOnInit() {
  	this.user = {username: "", password: ""}
  	this.logUser = {logUsername: "", logPassword: ""}

  }

  registerUser(user){
  	let observable = this._http.registerService(this.user)
  	observable.subscribe(data => {
  	console.log(data)
  	})
  }

  loginUser(user){
  	let observable = this._http.loginService(this.logUser)
  	observable.subscribe(data => {
    console.log("Subscription says")
  	console.log(data)
    this.userSession = data;

  	})
  }

}//End of exports
