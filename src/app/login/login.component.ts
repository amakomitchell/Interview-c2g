import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  fbLogin() {
    this.userService.fbLogin().then(() => {
      console.log('User has been logged in');
      this.router.navigate(['/dashboard']);
    });  }


  // onLogin() {
  //   console.log('User has been logged in');
  //   this.router.navigate(['/license']);
  // }
}
