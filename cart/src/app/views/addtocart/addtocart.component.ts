import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Iproducts } from 'src/app/interfaces/iproducts';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.scss']
})
export class AddtocartComponent implements OnInit {
  
  cartItems: Iproducts[];

  constructor(private dService: DataService) { }

  ngOnInit() {
    this.cartItems = this.dService.getCartItems();
  }

}
