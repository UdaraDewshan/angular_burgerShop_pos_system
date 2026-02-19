import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  @Output() categoryChange = new EventEmitter<String>();

  onSelectCategory(catagoryName : String){
    this.categoryChange.emit(catagoryName);
    console.log("click")
  }

  scrollToMenu(){
    document.getElementById('menu-section')?.scrollIntoView({behavior: 'smooth'});
  }

}
