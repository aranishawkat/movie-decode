import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TitleComponent } from './components/title/title.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TitleComponent,
    MovieItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
