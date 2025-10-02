import { Component } from '@angular/core';
import { CourseListComponent } from '../course-list/course-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CourseListComponent,CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  show!:boolean;
}
