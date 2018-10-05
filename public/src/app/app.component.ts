import { Component, OnInit} from '@angular/core';
import { HttpService } from './http.service';
import { ActivatedRoute, RouterOutlet, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  user: object;
  logUser: object;
  userSession: any;
  sessionSwitch: boolean;

  constructor(private _http: HttpService,
                private _router: Router) { }

  ngOnInit() {
  	this.user = {username: "", password: ""}
  	this.logUser = {logUsername: "", logPassword: ""}
    this.sessionSwitch = false;

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
    if (!this.userSession){
      this.sessionSwitch = false;
    }
    this.sessionSwitch = true;
    this._router.navigate(['dashboard'])
  	})
  }

}//End of exports
