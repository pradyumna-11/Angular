import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { CommonModule } from '@angular/common';

interface Book{
    id: number,
    name: string
}

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})



export class BookComponent {
  books!: Book[];
  constructor(private bookService: BookService) { }
  getBooks() {
    this.books = this.bookService.getBooks();
  }
  ngOnInit() {
    this.getBooks();
  }
}
