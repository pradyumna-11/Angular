import { Component, ViewEncapsulation } from '@angular/core';
import { FirstComponent } from '../first/first.component';
import { SecondComponent } from '../second/second.component';

@Component({
  selector: 'app-shadow',
  standalone: true,
  imports: [FirstComponent,SecondComponent],
  templateUrl: './shadow.component.html',
  styleUrl: './shadow.component.css',
  encapsulation:ViewEncapsulation.ShadowDom
})
export class ShadowComponent {

}
