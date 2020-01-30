import { Injectable } from '@angular/core';
import { Products } from '../interfaces/products';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Products[] = [];
  public $cartItems = new BehaviorSubject<Products[]>(this.cartItems);

  cartTotal = 0;
  $cartTotal = new BehaviorSubject<number>(this.cartTotal);

  cartQty = 0;
  $cartQty = new BehaviorSubject<number>(this.cartQty);

  constructor() { }

  addItemsToCart(item){
    let cartItem = this.cartItems.find(x => x.id === item.id);
    if(cartItem){
      cartItem.quantity ++;
    }
    else{
      item.quantity = 1;
      this.cartItems.push(item);
    }

    this.cartQty ++;


    
    console.log(this.cartItems);
    // +item.price {(+) = convert string to number in JS}
    this.cartTotal += +item.price;
    
    //.next broadcast to be subscirbed by other components
    this.$cartItems.next(this.cartItems);

    this.$cartTotal.next(this.cartTotal);

    this.$cartQty.next(this.cartQty);
  }

  removeProduct(item, index){
    this.cartItems.splice(index, 1);
    const totalPrice = item.quantity * +item.price;
    this.cartTotal -= totalPrice;
    this.cartQty -= item.quantity;

    this.broadcastSubjects();


  }

  broadcastSubjects(){
    this.$cartItems.next(this.cartItems);
    this.$cartQty.next(this.cartQty);
    this.$cartTotal.next(this.cartTotal);
  }
}
