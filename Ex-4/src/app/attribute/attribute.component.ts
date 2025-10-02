import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute',
  standalone: true,
  imports: [],
  templateUrl: './attribute.component.html',
  styleUrl: './attribute.component.css'
})
export class AttributeComponent {
  src = 'https://res.cloudinary.com/daxizvsge/image/upload/v1722520854/blog_temp_z7xfm9.avif';
  colspanValue = 2;
}
