import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksdataService } from '../booksdata.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent implements OnInit {
  constructor(private route:ActivatedRoute, private bdetails:BooksdataService) { }
  bookid:any;
  book:any;
  ngOnInit(): void {
  
    this.route.paramMap.subscribe(
      params=>{ 
        let n = params.get("id");
        this.bookid=Number(n); 
        this.book=this.bdetails.topBooks.find(m=>m.id==this.bookid)
      }
    )
    } 
    goBack() {
      window.history.back();
    }
}
