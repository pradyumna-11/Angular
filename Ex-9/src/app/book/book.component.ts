import { Component } from '@angular/core';
import { Book } from './books';
import { BookService } from '../book.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  title = 'Demo on HttpClientModule';
        books!: Book[];
        errorMessage!: string;
        ADD_BOOK!: boolean;
        UPDATE_BOOK!: boolean;
        DELETE_BOOK!: boolean;
        constructor(private bookService: BookService) { }
        getBooks() {
          this.bookService.getBooks().subscribe({
            next:  books => this.books = books,
            error:error => this.errorMessage = <any>error
          })
        }
        addBook(bookId: string, name: string): void {
          let id=parseInt(bookId)
          this.bookService.addBook({id, name })
            .subscribe({next:(book: any) => this.books.push(book)});
        }
        updateBook(bookId: string, name: string): void {
          let id=parseInt(bookId)
          this.bookService.updateBook({ id, name })
            .subscribe({next:(book: any) => this.books = book});
        }
        deleteBook(bookId: string): void {
          let id=parseInt(bookId)
          this.bookService.deleteBook(id)
            .subscribe({next:(book: any) => this.books = book});
        } 
        ngOnInit() {
          this.getBooks();
        }
}
