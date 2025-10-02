import { Component } from '@angular/core';
import { RepeatDirective } from '../repeat.directive';

@Component({
  selector: 'app-customdirective',
  standalone: true,
  imports: [RepeatDirective],
  templateUrl: './customdirective.component.html',
  styleUrl: './customdirective.component.css'
})
export class CustomdirectiveComponent {

}
