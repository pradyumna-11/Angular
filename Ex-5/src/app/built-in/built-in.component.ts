import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-built-in',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './built-in.component.html',
  styleUrl: './built-in.component.css'
})
export class BuiltInComponent {
title = 'product details';
  productCode = 'PROD_P001';
  productName = 'Apple MPTT2 MacBook Pro';
  productPrice = 217021;
  purchaseDate = '1/17/2018';
  productTax = '0.1';
  productRating = 4.92;
}
