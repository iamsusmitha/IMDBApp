import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { ListAllMoviesComponent } from './list-all-movies/list-all-movies.component';

const routes: Routes = [  {
  path:"add",
  component:AddMovieComponent,
},
{
  path:"list",
  component:ListAllMoviesComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
