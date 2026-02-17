import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../model/cart-item-model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  cartItems: CartItem[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(res => {
      this.cartItems = res;
      this.totalPrice = this.cartService.getTotalPrice();
    });
  };

}
