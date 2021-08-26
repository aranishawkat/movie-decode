import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  starValue : number = 4;
  userValue : number = 3;
  val1: number | undefined;

  // Add review
  displayBasic: boolean = false;

  showBasicDialog() {
    this.displayBasic = true;
}

  //Review Username
    userNameReview: any; 
    userComment: any;


  constructor() { }

  ngOnInit(): void {

  }

}
