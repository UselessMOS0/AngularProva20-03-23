import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchCocktailComponent } from './search-cocktail/search-cocktail.component';
import { CocktailComponent } from './cocktail/cocktail.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchCocktailComponent,
    CocktailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
