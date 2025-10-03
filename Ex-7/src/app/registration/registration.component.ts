import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  courses = ['Angular', 'React', 'Vue', 'Node.js'];
  
  registration = {
    name: '',
    email: '',
    course: '',
    gender: ''
  };
  submittedData:any = null

  submitted = false;

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Data:', this.registration);
      this.submitted = true;
      this.submittedData = {...this.registration};
      form.resetForm();
    }
  }
}
