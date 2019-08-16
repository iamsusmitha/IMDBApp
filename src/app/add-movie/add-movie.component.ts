import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent {

  constructor(private data:DataService){}
    handleFormData(form){
    console.log(form);
    this.data.movies.push(form.value);
    console.log(this.data.movies);
  }
}
