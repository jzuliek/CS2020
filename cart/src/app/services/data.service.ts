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
      price: '1 million',
      qty:0

    },
    {
      id: '2',
      pName: 'Ninja Stars',
      pNameURL: 'NinjaStars',
      pDesc: 'Paper Ninja Star',
      additionalInfo: 'May Cause Paper Cuts',
      price: 'dos',
      qty:0

    },
    {
      id: '3',
      pName: 'Ninja Stars',
      pNameURL: 'NinjaStars',
      pDesc: 'Paper Ninja Star',
      additionalInfo: 'May Cause Paper Cuts',
      price: 'tres',
      qty:0

    },

  ]

  constructor() { }

  getProducts(): Iproducts[]{
    return this.products;
  }

  addToCart(cartItem: Iproducts){

    if(!this.itemsInCart.includes(cartItem)){

      cartItem.qty++;
      
      this.itemsInCart.push(cartItem);
      console.log(this.itemsInCart);
    }
    else{
      //search for item in cart 
      //then add 1 to qty

    }

  }

  getCartItems(): Iproducts[]{
    return this.itemsInCart;
  }

  emptyCart(){
    this.itemsInCart.length = 0;
  }

  removeItemFromCart(itemToRemove: Iproducts):void {
    //search for product and remove from items in cart
    //fint the index location of a product

    const index = this.findItemInCart(itemToRemove);
    //preform a splice
    this.itemsInCart[index].qty = 0;
    this.itemsInCart.splice(index, 1);

  }

  findItemInCart(id: Iproducts): number{
    //find product id in our cart


    return this.itemsInCart.indexOf(id); 

  }
}
