import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './observer.component.html',
  styleUrl: './observer.component.css'
})
export class ObserverComponent {
  data!: Observable<number>;
  myArray: number[] = [];
  errors!: boolean;
  finished!: boolean;
  fetchData(): void {
    this.data = new Observable(observer => {
      setTimeout(() => { observer.next(11); }, 1000),
      setTimeout(() => { observer.next(22); }, 2000),
      setTimeout(() => { observer.complete(); }, 3000);
    });
    this.data.subscribe((value) => this.myArray.push(value),
      error => this.errors = true,
      () => this.finished = true);
  }
}
