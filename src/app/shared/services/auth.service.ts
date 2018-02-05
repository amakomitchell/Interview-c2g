import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  authToken:any;
  employee:any;

  constructor(private http:Http) { }

  registerEmployee(employee){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:4200/employee/register', employee,{headers:headers});
    // .map(res => res.json());
  }
  authenticateEmployee(employee){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:4200/employee/authenticate', employee,{headers:headers});
    //.map(res => res.json());
  }


}
