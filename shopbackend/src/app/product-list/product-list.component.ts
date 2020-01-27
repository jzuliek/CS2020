import { Component, OnInit } from '@angular/core';
import { Products } from '../interfaces/products';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Products[];

  constructor(private dService: DataService) { }

  ngOnInit() {
    //grabbing prodcuts object from services
    this.products = this.dService.getProducts();
  }

}
