import { Component, OnInit } from '@angular/core';
import { Iproducts } from 'src/app/interfaces/iproducts';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {

  products: Iproducts[] = [];

  constructor(private dService: DataService) { }

  ngOnInit() {
    this.products = this.dService.getProducts();
  }

  addToCart(p: Iproducts){
    this.dService.addToCart(p);
  }

}
