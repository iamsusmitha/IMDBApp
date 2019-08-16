import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list-all-movies',
  templateUrl: './list-all-movies.component.html',
  styleUrls: ['./list-all-movies.component.css']
})
export class ListAllMoviesComponent implements OnInit {
  movies;
  constructor(private data:DataService) { }

  ngOnInit() {
    this.movies=this.data.movies;
  }

}
