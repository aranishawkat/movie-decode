import { Component, OnInit } from "@angular/core";
import { Movies } from "./mock-movies";
import { Movie } from "./movie";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  movieId = "100";
  reviewId = "100";
  selectedMovie: any = null;

  movies: Movie[] = Movies;

  showMovieList: boolean = true;
  showAddMovie: boolean = false;
  showMovieItem: boolean = false;
  showAddReview: boolean = false;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {}

  onViewItem(id: string) {
    this.showMovieList = false;
    this.showMovieItem = true;
    this.showAddReview = true;

    for (let i = 0; i < this.movies.length; i++) {
      if (this.movies[i].id === id) {
        this.selectedMovie = this.movies[i];
      }
    }
  }

  onGoBack() {
    this.showMovieList = true;
    this.showMovieItem = false;
    this.showAddReview = false;
    this.selectedMovie = null;
  }

  onDeleteItem(id: string) {
    this.movies = this.movies.filter((movie) => movie.id !== id);
  }

  onAddToggle() {
    this.showMovieList = false;
    this.showAddMovie = true;
  }

  onAddMovie(payload: any) {
    console.log("htisonasfasf");
    payload.id = this.movieId;

    this.movieId = (parseInt(this.movieId, 10) + 1).toString();
    this.movies.unshift(payload);
    this.showAddMovie = false;
    this.showMovieList = true;

    this.messageService.add({
      severity: "success",
      summary: "Success",
      detail: "Movie added",
    });
  }

  onDiscardMovie() {
    this.showAddMovie = false;
    this.showMovieList = true;
  }

  onEditMovie(payload: any) {
    payload.reviews = this.selectedMovie.reviews;
    let movieIdx = -1;

    for (let i = 0; i < this.movies.length; i++) {
      if (this.movies[i].id === this.selectedMovie.id) {
        movieIdx = i;
      }
    }

    this.movies[movieIdx] = payload;
    this.selectedMovie = this.movies[movieIdx];
    this.showAddMovie = false;
    this.showMovieItem = true;
    this.showAddReview = true;

    this.messageService.add({
      severity: "success",
      summary: "Success",
      detail: "Movie updated",
    });
    
  }

  onEditDiscardMovie() {
    this.showAddMovie = false;
    this.showMovieItem = true;
  }

  onDiscardReview() {
    this.showAddReview = false;
  }

  onAddReview(payload: any) {
    payload.id = this.reviewId;

    this.reviewId = (parseInt(this.reviewId, 10) + 1).toString();

    for (let i = 0; i < this.movies.length; i++) {
      if (this.movies[i].id === this.selectedMovie.id) {
        this.movies[i].reviews?.unshift(payload);
      }
    }

    this.messageService.add({
      severity: "success",
      summary: "Success",
      detail: "Review added",
    });

    this.showAddReview = false;
  }

  onEditToggle() {
    this.showMovieItem = false;
    this.showAddReview = false;
    this.showAddMovie = true;
  }
}
