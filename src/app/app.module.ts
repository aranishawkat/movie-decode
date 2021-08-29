import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ConfirmationService, MessageService } from "primeng/api";
import { ToastModule } from "primeng/toast";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { TitleComponent } from "./components/title/title.component";
import { MovieItemComponent } from "./components/movie-item/movie-item.component";
import { MovieListComponent } from "./components/movie-list/movie-list.component";
import { MovieReviewComponent } from "./components/add-movie-review/add-movie-review.component";
import { DataViewModule } from "primeng/dataview";
import { ButtonModule } from "primeng/button";
import { PanelModule } from "primeng/panel";
import { DropdownModule } from "primeng/dropdown";
import { DialogModule } from "primeng/dialog";
import { InputTextModule } from "primeng/inputtext";
import { RatingModule } from "primeng/rating";
import { RippleModule } from "primeng/ripple";
import { CardModule } from "primeng/card";
import { InputTextareaModule } from "primeng/inputtextarea";
import { AddMovieComponent } from "./components/add-movie/add-movie.component";
import { ReviewListComponent } from "./components/review-list/review-list.component";
import { ConfirmPopupModule } from "primeng/confirmpopup";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TitleComponent,
    MovieItemComponent,
    MovieListComponent,
    MovieReviewComponent,
    AddMovieComponent,
    ReviewListComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    DataViewModule,
    PanelModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    RatingModule,
    CardModule,
    InputTextareaModule,
    ConfirmPopupModule,
    ToastModule,
  ],
  providers: [ConfirmationService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
