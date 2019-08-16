import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { ListAllMoviesComponent } from './list-all-movies/list-all-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddMovieComponent,
    ListAllMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
