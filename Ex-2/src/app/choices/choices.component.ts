import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-choices',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './choices.component.html',
  styleUrl: './choices.component.css'
})
export class ChoicesComponent {

  choice = 0
  nextChoice() {
    this.choice++;
  }
}
