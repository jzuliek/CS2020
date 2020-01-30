import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Products } from '../interfaces/products';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartCount = 0;

  cartItems: Products[] =[];
  showList = false;
  cartTotal = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.$cartItems.subscribe(items =>{
      this.cartItems = items;
      
    });
    this.cartService.$cartTotal.subscribe(total =>{
      this.cartTotal = total;
      
    });
    this.cartService.$cartQty.subscribe(count =>{
      this.cartCount = count;
      
    });
  }

  toggleList(){
    this.showList = !this.showList;
  }

  removeFromCart(item, index){
    this.cartService.removeProduct(item, index);
  }

}
