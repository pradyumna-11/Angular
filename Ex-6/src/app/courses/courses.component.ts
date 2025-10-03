import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { CourseListComponent } from '../course-list/course-list.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule,CourseListComponent,FormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courses = [
    { id: 1, name: 'Angular', description: 'Frontend framework by Google', duration: '3 Months' },
    { id: 2, name: 'React', description: 'Frontend library by Facebook', duration: '2 Months' },
    { id: 3, name: 'Vue', description: 'Progressive frontend framework', duration: '2.5 Months' }
  ];

  selectedCourse = this.courses[0];
  
  message!: string;
  courseReg(courseName: string) {
    this.message = `Your registration for ${courseName} is successful`;
  }
}
