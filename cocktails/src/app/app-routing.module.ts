import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchCocktailComponent } from './search-cocktail/search-cocktail.component';
import { CocktailComponent } from './cocktail/cocktail.component';

const routes: Routes = [
  { path: 'cocktail/:id', component: CocktailComponent },
  { path: 'search', component: SearchCocktailComponent},
  { path: '',   redirectTo: '/search', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
