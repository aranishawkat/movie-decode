import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-movie-item",
  templateUrl: "./movie-item.component.html",
  styleUrls: ["./movie-item.component.scss"],
})
export class MovieItemComponent implements OnInit {
  @Input() movie: any = {};

  @Output() goBack = new EventEmitter();
  @Output() editToggle = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onGoBack() {
    this.goBack.emit();
  }
  onEdit() {
    this.editToggle.emit();
  }
}
