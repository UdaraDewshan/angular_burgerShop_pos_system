import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { HeroComponent } from "../../components/hero/hero.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ItemPageComponent } from "../item-page/item-page.component";

@Component({
  selector: 'app-home',
  imports: [NavBarComponent, HeroComponent, FooterComponent, ItemPageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
