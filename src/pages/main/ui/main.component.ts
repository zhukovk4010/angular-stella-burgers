import {Component, EventEmitter, Input, Output} from '@angular/core';
import {
    IngredientCategorySwitcherComponent
} from "../../../features/ingredient-category-switcher/";
import {IngredientsListComponent} from "../../../widgets/ingredients-list";
import {IIngredient} from "../../../types/types";
import {BasketModalComponent} from "../../../widgets/basket-modal";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    IngredientCategorySwitcherComponent,
    IngredientsListComponent,
    BasketModalComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})

export class MainComponent {
  @Input({ required: true }) ingredientsArray: IIngredient[] = [];
  @Input({required: true}) selectedIngredientsArray: IIngredient[] = [];
  @Output() selectIngredient = new EventEmitter<IIngredient>();
}
