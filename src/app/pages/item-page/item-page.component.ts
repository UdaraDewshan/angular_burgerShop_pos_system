import { Component, input, Input, OnInit } from '@angular/core';
import { product } from '../../model/product.model';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-item-page',
  imports: [],
  templateUrl: './item-page.component.html',
  styleUrl: './item-page.component.css'
})
export class ItemPageComponent implements OnInit{
  
  @Input() products: product[] = [];

  constructor(
    private productService : ProductService,
    private cartService : CartService
  ){}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) =>{
        this.products = data;
      }
    });
  }


  addToCart(item: product){
    this.cartService.addToCart(item);
  }
  
}
