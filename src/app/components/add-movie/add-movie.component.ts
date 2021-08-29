import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { MessageService, ConfirmationService } from "primeng/api";

@Component({
  selector: "app-add-movie",
  templateUrl: "./add-movie.component.html",
  styleUrls: ["./add-movie.component.scss"],
})
export class AddMovieComponent implements OnInit {
  @Input() headerText: string = "Add Movie";
  @Input() movie: any = {};

  @Output() addMovie = new EventEmitter();
  @Output() discard = new EventEmitter();
  @Output() editMovie = new EventEmitter();
  @Output() discardEdit = new EventEmitter();

  rating: number = 0;
  name: string = "";
  genre: string = "";
  year: string = "";
  poster: string = "";
  shortDescription: string = "";
  longDescription: string = "";

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    if (Object.keys(this.movie).length !== 0) {
      this.rating = this.movie.rating;
      this.name = this.movie.name;
      this.genre = this.movie.genre;
      this.year = this.movie.year;
      this.poster = this.movie.poster;
      this.shortDescription = this.movie.shortDescription;
      this.longDescription = this.movie.longDescription;
    }
  }

  clearFields() {
    this.rating = 0;
    this.name = "";
    this.genre = "";
    this.year = "";
    this.poster = "";
    this.shortDescription = "";
    this.longDescription = "";
  }

  onAddMovie() {
    if (
      this.rating === 0 ||
      this.name.length === 0 ||
      this.genre.length === 0 ||
      this.year.length === 0 ||
      this.poster.length === 0 ||
      this.shortDescription.length === 0 ||
      this.longDescription.length === 0
    ) {
      console.log("called val");

      this.messageService.add({
        severity: "error",
        summary: "Error",
        detail: "Fields required",
      });

      return;
    }

    const payload = {
      rating: this.rating,
      name: this.name,
      genre: this.genre,
      year: this.year,
      poster: this.poster,
      reviews: [],
      shortDescription: this.shortDescription,
      longDescription: this.longDescription,
    };

    this.clearFields();

    this.addMovie.emit(payload);
  }

  onDiscard(event: any) {
    this.confirmationService.confirm({
      target: event.target,
      message: "Are you sure that you want to proceed?",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.discard.emit();
      },
      reject: () => {},
    });
  }
}
