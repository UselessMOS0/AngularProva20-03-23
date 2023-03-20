import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private http : HttpClient) { }

  allCocktails() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
    let obs = this.http.get(url);
    return obs;
  }
  searchC(query:string) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`;
    let obs = this.http.get(url);
    return obs;
  }
  searchId(id:string) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    let obs = this.http.get(url);
    return obs;
  }
}
