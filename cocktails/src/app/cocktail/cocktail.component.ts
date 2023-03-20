import { Component } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css']
})
export class CocktailComponent {
  cocktail:any;

  constructor(
    private service: CocktailService,
    private route: ActivatedRoute,
    ){}

    ngOnInit(): void {
      this.route.paramMap.subscribe(this.getRouterParam);
    }

    getRouterParam = (params:ParamMap) =>{
      let cocktailId = params.get('id')
      if(cocktailId){
        this.service.searchId(cocktailId).subscribe((data) => {this.cocktail=data; console.log(data)})
      }
    }

}
