import { Component } from '@angular/core';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-search-cocktail',
  templateUrl: './search-cocktail.component.html',
  styleUrls: ['./search-cocktail.component.css']
})
export class SearchCocktailComponent {
  constructor(private service : CocktailService){}

  ngOnInit(): void{
    this.service.allCocktails().subscribe((data)=>console.log(data))
  }
}
