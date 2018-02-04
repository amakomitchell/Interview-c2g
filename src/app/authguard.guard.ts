import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      return this.checkLogin();
  }

  checkLogin(): Promise<boolean> {
      return new Promise((resolve, reject) => {
          this.userService.isLoggedIn().then(() => {
              resolve(true);
          }).catch(() => {
              this.router.navigate(['/welcome']);
              reject(false);
          });
      });
  }
}
