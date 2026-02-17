import { Injectable } from '@angular/core';
import { CartItem } from '../model/cart-item-model';
import { BehaviorSubject } from 'rxjs';
import { product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: CartItem[] = [];

  public cartItemList = new BehaviorSubject<CartItem[]>([]);

  constructor() { }


  addToCart(product : product){

    const trueItem = this.cartItems.find(item => item.product.id === product.id);

    if(trueItem){
      trueItem.quantity += 1;
    }else{
      this.cartItems.push({product: product, quantity: 1});
    }

    this.cartItemList.next(this.cartItems);

    alert(product.name + 'added to bill');
  }

  getCartItems(){
    return this.cartItemList.asObservable();
  }

  getTotalPrice():number{
    let nextTotal = 0;
    this.cartItems.map(item =>{
      nextTotal += item.product.price * item.quantity;
    });
    return nextTotal;
  }


}
