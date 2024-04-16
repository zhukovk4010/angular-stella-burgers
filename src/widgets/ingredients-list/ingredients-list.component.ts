import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IngredientCardComponent} from "../../entities/ingredient-card/ui/ingredient-card.component";
import {IIngredient} from "../../types/types";


@Component({
  selector: 'app-ingredients-list',
  standalone: true,
  imports: [
    IngredientCardComponent
  ],
  templateUrl: './ingredients-list.component.html',
  styleUrl: './ingredients-list.component.scss'
})

export class IngredientsListComponent {
  @Input({ required: true }) ingredientsArray: IIngredient[] = [];
  @Input({required: true}) selectedIngredientsArray: IIngredient[] = [];
  @Output() selectIngredient = new EventEmitter<IIngredient>();

  countingTheNumberOfSelectedIngredients = (ingredient: IIngredient) => {
    let counter = 0;

    this.selectedIngredientsArray.forEach(selectedIngredient => {
      if (selectedIngredient._id === ingredient._id) {
        counter += 1;
      }
    });

    return counter;
  }
}
