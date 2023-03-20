import { Component } from '@angular/core';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-search-cocktail',
  templateUrl: './search-cocktail.component.html',
  styleUrls: ['./search-cocktail.component.css']
})
export class SearchCocktailComponent {
  cocktails:any;
  query!:string;
  constructor(private service : CocktailService){}

  ngOnInit(): void{
    this.service.allCocktails().subscribe((data)=> this.cocktails = data)
  }
  submit(query: HTMLInputElement): void {

    if (!query.value) {
      this.service.allCocktails().subscribe((data)=>this.cocktails = data)
      return;
    }
    this.query = query.value;
    this.service.searchC(this.query).subscribe((data) => this.cocktails = data);
  }
}
