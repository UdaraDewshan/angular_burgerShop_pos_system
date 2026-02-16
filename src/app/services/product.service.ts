import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { product } from '../model/product.model';
import { MOCK_PRODUCTS } from '../data/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //private url = 'https://fakestoreapi.com/products';

  constructor() { }

  getProducts():Observable<product[]>{
    return of(MOCK_PRODUCTS);
  }

}