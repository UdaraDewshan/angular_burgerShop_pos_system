import { Component, OnInit } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { ItemPageComponent } from "../item-page/item-page.component";
import { product } from '../../model/product.model';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-home',
  imports: [HeroComponent, ItemPageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  productsList: product[] = [];
  allProduts: product[] = [];

  constructor(private productService : ProductService){}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({

      next:(data) => {
        this.productsList = data;
        this.allProduts = data;
        console.log('Product Loaded',this.productsList);
        this.filterProducts('burgers');
      },

      error: (err) => {
          console.log('error featch producs',err);
      }
    });
  }

  filterProducts(category:String){
    this.productsList = this.allProduts.filter(item => item.category === category);
  }

}
