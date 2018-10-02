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

  constructor(private _http: HttpService) { }

  ngOnInit() {
  	this.user = {username: "", password: ""}
  	this.logUser = {logUsername: "", logPassword: ""}
    console.log(this.logUser)

  }

  registerUser(user){
  	let observable = this._http.registerService(this.user)
  	observable.subscribe(data => {
  	console.log(data)
  	})
  }

  loginUser(user){
    console.log(this.logUser)
  	let observable = this._http.loginService(this.logUser)
  	observable.subscribe(data => {
  	console.log(data)
  	})
  }

}//End of exports
