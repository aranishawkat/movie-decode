import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

    userValue : number = 3;
    
    // Add review
    displayBasic: boolean = false;

    showBasicDialog() {
      this.displayBasic = true;
  }
  
    //Review Username
      userNameReview: any; 
      userComment: any;
      val1: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
