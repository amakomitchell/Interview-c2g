import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { UserService } from './user.service';

@Injectable()
export class AnonymousGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      return this.checkLogin();
  }

  checkLogin(): Promise<boolean> {
      return new Promise((resolve, reject) => {
          this.userService.isLoggedIn().then(() => {
              this.router.navigate(['/dashboard']);
              reject(false);
          }).catch(() => {
              resolve(true);
          });
      });
  }
}