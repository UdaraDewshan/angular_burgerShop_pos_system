import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: 'burgers' | 'sides' | 'drinks';
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: 1,
      name: 'Double Whopper',
      price: 1500,
      image: 'images/bg2.png', 
      description: 'Two flame-grilled beef patties with melted cheese.',
      category: 'burgers'
    },
    {
      id: 2,
      name: 'Spicy Chicken Royale',
      price: 1200,
      image: 'images/bg2.png',
      description: 'Crispy chicken breast with spicy mayo and lettuce.',
      category: 'burgers'
    },
    {
      id: 3,
      name: 'French Fries (L)',
      price: 600,
      image: 'images/bg2.png', 
      description: 'Golden crispy potato fries with salt.',
      category: 'sides'
    },
    {
      id: 4,
      name: 'Coca Cola',
      price: 300,
      image: 'images/bg2.png', 
      description: 'Chilled refreshing sparkling drink.',
      category: 'drinks'
    }
  ];

  constructor() { }


  getProducts(): Product[] {
    return this.products;
  }
  

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}