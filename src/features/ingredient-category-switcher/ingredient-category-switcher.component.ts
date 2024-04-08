import { Component } from '@angular/core';

@Component({
  selector: 'app-ingredient-category-switcher',
  standalone: true,
  imports: [],
  templateUrl: './ingredient-category-switcher.component.html',
  styleUrl: './ingredient-category-switcher.component.scss'
})
export class IngredientCategorySwitcherComponent {
  activeIngredientsCategory: 'rolls' | 'sauces' | 'nights' = 'nights';

  switchIngredientsCategory(ingredient: 'rolls' | 'sauces' | 'nights') {
    this.activeIngredientsCategory = ingredient;
  }
}
