import { Injectable } from '@angular/core';
import { Iproducts } from '../interfaces/iproducts';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  itemsInCart: Iproducts[] =[];

  products: Iproducts[] = [
    {
      id: '1',
      pName: 'Ninja Stars',
      pNameURL: 'NinjaStars',
      pDesc: 'Paper Ninja Star',
      additionalInfo: 'May Cause Paper Cuts',
      price: '1 million'

    },
    {
      id: '2',
      pName: 'Ninja Stars',
      pNameURL: 'NinjaStars',
      pDesc: 'Paper Ninja Star',
      additionalInfo: 'May Cause Paper Cuts',
      price: 'dos'

    },
    {
      id: '3',
      pName: 'Ninja Stars',
      pNameURL: 'NinjaStars',
      pDesc: 'Paper Ninja Star',
      additionalInfo: 'May Cause Paper Cuts',
      price: 'tres'

    },

  ]

  constructor() { }

  getProducts(): Iproducts[]{
    return this.products;
  }

  addToCart(cartItem: Iproducts){
    this.itemsInCart.push(cartItem);
    console.log(this.itemsInCart);
  }

  getCartItems(): Iproducts[]{
    return this.itemsInCart;
  }
}
