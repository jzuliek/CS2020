import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Products } from '../interfaces/products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-desc',
  templateUrl: './product-desc.component.html',
  styleUrls: ['./product-desc.component.scss']
})
export class ProductDescComponent implements OnInit {

  product: Products;

  constructor(private dservice: DataService, private route: ActivatedRoute
    ) { }


  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    const productName = this.route.snapshot.paramMap.get('productName');

    //grab id 
    this.getProduct(id);
  }
  
  getProduct(sku: string){
    
    console.log(sku);

    this.dservice.getItem(sku).subscribe(
      x => this.product = x

      
    )

  }
}
