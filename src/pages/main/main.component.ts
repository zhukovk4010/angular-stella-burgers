import {Component, Input} from '@angular/core';
import {
    IngredientCategorySwitcherComponent
} from "../../features/ingredient-category-switcher/ingredient-category-switcher.component";
import {IngredientsListComponent} from "../../widgets/ingredients-list/ingredients-list.component";

interface IIngredient {
  calories: number
  carbohydrates: number
  fat: number
  image: string
  image_large: string
  image_mobile: string
  name: string
  price: number
  proteins: number
  type: string
  __v: number
  _id: number
}

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    IngredientCategorySwitcherComponent,
    IngredientsListComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  @Input({ required: true }) ingredientsList: [IIngredient] | [] = [];
}
