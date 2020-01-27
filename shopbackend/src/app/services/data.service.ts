import { Injectable } from '@angular/core';
import { Products } from '../interfaces/products';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private products: Products[] = [
    {
      id: '1',
      productName: 'yep',
      productNameURL: 'yep',
      productDescription: 'yep is gross',
      additionalInfo: 'yep smells',
      price: '$1'
    },
    {
      id: '2',
      productName: 'yepp',
      productNameURL: 'yepp',
      productDescription: 'yepp is gross',
      additionalInfo: 'yepp smells',
      price: '$2'
    },
    {
      id: '3',
      productName: 'yepppp',
      productNameURL: 'yeppp',
      productDescription: 'yeppp is gross',
      additionalInfo: 'yeppp smells',
      price: '$3'
    },
    {
      id: '4',
      productName: 'yepppp',
      productNameURL: 'yepppp',
      productDescription: 'yepppp is gross',
      additionalInfo: 'yepppp smells',
      price: '$4'
    },
    {
      id: '5',
      productName: 'yeppppp',
      productNameURL: 'yeppppp',
      productDescription: 'yeppppp is gross',
      additionalInfo: 'yeppppp smells',
      price: '$5'
    },
  ]

  constructor() { }

  //need to return products array from export
  getProducts(): Products[]{
    return this.products;
  }

  getItem( id:string ): Observable <Products> {

    return  of( this.products.find(
      products => products.id === id
    ));

  }
}
