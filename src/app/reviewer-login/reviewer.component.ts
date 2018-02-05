import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/models/hero';

@Component({
  selector: 'app-reviewer',
  templateUrl: './reviewer.component.html',
  styleUrls: ['./reviewer.component.css']
})
export class ReviewerComponent implements OnInit {
  types = ['Articulated Vehicle', 'Commercial', 'Private', 'Motorcycle'];
  model = new Hero(1, this.types[1], '90', 'Imo', 'First time', 'satellite town');

  constructor() { }

  ngOnInit() {
    let review = null;
    review = JSON.parse(localStorage.getItem('review_applications'));
    if(review) {
      review.applications.push(this.model);
    } else {
      review = { 
        applications: [ this.model ]
      }
    }
  }

}
