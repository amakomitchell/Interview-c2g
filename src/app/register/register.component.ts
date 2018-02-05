import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import { ValidateService } from '../shared/services/validate.service';
// import { AuthService } from '../shared/services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

import { Hero } from '../shared/models/hero';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  types = ['Articulated Vehicle', 'Commercial', 'Private', 'Motorcycle'];

  model = new Hero(1, this.types[1], '90', 'Imo', 'First time', 'satellite town');

  submitted = false;

  onSubmit(){ 
    this.submitted = true; 
    let license = null;
    license = JSON.parse(localStorage.getItem('license_applications'));
    if(license) {
      license.applications.push(this.model);
    } else {
      license = { 
        applications: [ this.model ]
      }
    }
    localStorage.setItem('license_applications', JSON.stringify(license))
  }

  get diagnostic() { return JSON.stringify(this.model); }

  constructor(
    private flashMessage:FlashMessagesService,
    // private authService:AuthService,
    private router:Router,
    
  ) { }

  ngOnInit() {
  }

   newHero() {
     this.model = new Hero(2, '', '','','','');
   }
}
