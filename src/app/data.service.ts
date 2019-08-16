import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  movies=[{
    name:"saaho",
    rating:8,
    url:"https://images.indianexpress.com/2019/08/saaho-759.jpeg"
  }];
  constructor() { }
}
