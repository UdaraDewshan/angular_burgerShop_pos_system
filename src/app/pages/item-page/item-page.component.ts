import { Component, Input } from '@angular/core';
import { product } from '../../model/product.model';

@Component({
  selector: 'app-item-page',
  imports: [],
  templateUrl: './item-page.component.html',
  styleUrl: './item-page.component.css'
})
export class ItemPageComponent {
  
  @Input() products: product[] = [];
  
}
