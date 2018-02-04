import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public currentUser : any = {};

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getCurrentUser().then(profile => this.currentUser = profile)
      .catch(() => this.currentUser = {});
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/welcome']);
  }

}
