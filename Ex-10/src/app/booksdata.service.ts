import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksdataService {

  
  topBooks=[
    {"id":1,"name":"HTML 5"},
    {"id":2,"name":"CSS 3"},
    {"id":3,"name":"Java Script"},
    {"id":4,"name":"Ajax Programming"},
  ]
  books=[
    {"id":1,"name":"HTML 5"},
    {"id":2,"name":"CSS 3"},
    {"id":3,"name":"Java Script"},
    {"id":4,"name":"Ajax Programming"},
    {"id":5,"name":"jQuery"},
    {"id":6,"name":"Mastering Node.js"},
    {"id":7,"name":"Angular JS 1.x"},
    {"id":8,"name":"ng-book 2"},
    {"id":9,"name":"Backbone JS"},
    {"id":10,"name":"Yeoman"}
  ]
  constructor() { }
  getTopBooks(){
    return JSON.stringify(this.topBooks)
  }
}
