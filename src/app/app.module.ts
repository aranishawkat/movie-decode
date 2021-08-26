import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TitleComponent } from './components/title/title.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import {RatingModule} from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TitleComponent,
    MovieItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule,
    FormsModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
