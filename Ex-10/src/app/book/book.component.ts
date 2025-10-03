import { Component, OnInit } from '@angular/core';
import { BooksdataService } from '../booksdata.service';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

interface Book{
  name:string,
  id:number,
}

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit{

  constructor(private displayBooks: BooksdataService,private router:Router) { }
  books=this.displayBooks.books;
  gotoDetail(book:Book): void {
    this.router.navigate(['/books/detail/', book.id]);
  }
  ngOnInit(): void {
    this.books;
  }

  
}
