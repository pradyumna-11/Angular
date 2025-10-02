import { Component } from '@angular/core';
import { MessageDirective } from '../message.directive';

@Component({
  selector: 'app-custom',
  standalone: true,
  imports: [MessageDirective],
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.css'
})
export class CustomComponent {
myMessage = 'Hello, I am from attribute directive';
}
