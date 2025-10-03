import { Injectable } from '@angular/core';
import { books } from './book/book-data';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  getBooks() {
    return books;
  }
}
