import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { BooksdataService } from '../booksdata.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  books=this.book1Service.topBooks
  constructor(
    private router: Router,
    private book1Service: BooksdataService) { }
  ngOnInit(): void {
    this.book1Service.getTopBooks()
  }
}
