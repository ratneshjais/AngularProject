import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private Auth:AuthService, private route:Router) { }

  ngOnInit() {
  }

  VerifyAuth(event)
  {
    event.preventDefault();
    const username = event.target.querySelector('#username').value;
    const password = event.target.querySelector('#password').value;

    this.Auth.getUserDetails(username,password).subscribe(data =>  {
    if(data.success)
    {
        this.route.navigate(['admin']);
        this.Auth.setLoggedIn(true);
    }
    else
    {
      this.route.navigate(['admin']);
      this.Auth.setLoggedIn(true);
      window.alert(data.message);
    }
    });

  }
}
