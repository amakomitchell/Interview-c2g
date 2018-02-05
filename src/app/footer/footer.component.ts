import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // const thisYear  = new Date().getFullYear();
  // startYear = '2014';

  // if (thisYear > this.startYear) { ('#copyright').text(this.startYear + '-' + thisYear); } 
}
