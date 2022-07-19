import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipes } from '../recipes';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  recipes: Recipes[] = []

  constructor(private _RecipeService: RecipeService) {
  }

  ngOnInit(): void {
    this._RecipeService.getRecipe().subscribe((data) => {
      this.recipes = data.recipes;
    })
  }

}
