import {Component, EventEmitter, Input, Output} from '@angular/core';
import {
    IngredientCategorySwitcherComponent
} from "../../../features/ingredient-category-switcher/ingredient-category-switcher.component";
import {IngredientsListComponent} from "../../../widgets/ingredients-list/ingredients-list.component";
import {IIngredient} from "../../../types/types";

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
  @Input({ required: true }) ingredientsArray: IIngredient[] = [];
  @Input({required: true}) selectedIngredientsArray: IIngredient[] = [];
  @Output() selectIngredient = new EventEmitter<IIngredient>();
}
