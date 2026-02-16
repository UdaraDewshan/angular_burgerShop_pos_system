import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url : any = 'https://fakestoreapi.com/products';

  constructor(private http : HttpClient) { }

  getProducts(){

  }

}