import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  movieName:string="example";
  result
  constructor(route:ActivatedRoute,private data:DataService) { 
    this.movieName=route.snapshot.params.name;
    console.log(this.movieName);
  }

  ngOnInit() {
    let temp=this.movieName;
    let movie=this.data.movies.filter(function(m){
      return m.name===temp;
    });
    this.result=movie[0];
    console.log(this.result);
  }

}
