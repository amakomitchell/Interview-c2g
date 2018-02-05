import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { AuthHttp } from 'angular2-jwt';

declare const FB:any;

@Injectable()
export class UserService {

  constructor(private http: AuthHttp) { 
    FB.init({
      appId      : '145797676227766', // replace with your appID
      status     : false, // the SDK will attempt to get info about the current user immediately after init
      cookie     : false,  // enable cookies to allow the server to access
      // the session
      xfbml      : false,  // With xfbml set to true, the SDK will parse your page's DOM to find and initialize any social plugins that have been added using XFBML
      version    : 'v2.8' // use graph api version 2.5
    });
  }

  fbLogin() {
    return new Promise((resolve, reject) => {
      FB.login(result => {
        if (result.authResponse) {
          FB.api('/me', {
            fields: 'id,about,picture,birthday,email,first_name,gender,hometown,link,location,middle_name,name,timezone,website,work'
          }, (response) => {
            localStorage.setItem('user_profile', JSON.stringify(response));
            resolve(response);
          });
        } else {
          reject();
        }
      }, {scope: 'public_profile,email'})
    });
  }

  logout() {
    localStorage.removeItem('user_profile');
  }

  isLoggedIn() {
    return new Promise((resolve, reject) => {
      this.getCurrentUser().then(user => resolve(true)).catch(() => reject(false));
    });
  }

  getCurrentUser() {
    return new Promise((resolve, reject) => {
      const user = JSON.parse(localStorage.getItem('user_profile'));
      if (user) {
        resolve(user);
      } else {
        reject();
      }
    });
  }

}