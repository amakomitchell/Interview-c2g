import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { UserService } from '../user.service';

declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, 
      private userService: UserService) {
        gapi.load('auth2', function(){
          gapi.auth2.init()
        });
       }

  ngOnInit() {
    
  }

  fbLogin() {
    this.userService.fbLogin().then(() => {
      console.log('User has been logged in');
      this.router.navigate(['/dashboard']);
    });  
  }
  googleLogin() {
    let googleAuth = gapi.auth2.getAuthInstance();
    googleAuth.then(() => {
      googleAuth.signIn({scope: 'profile email'}).then(googleUser => {
        console.log(googleUser.getBasicProfile());
      });
    });
  }

  // onLogin() {
  //   console.log('User has been logged in');
  //   this.router.navigate(['/license']);
  // }
}
