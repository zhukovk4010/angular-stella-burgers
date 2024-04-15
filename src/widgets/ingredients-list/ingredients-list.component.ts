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
  @Input({ required: true }) ingredientsList: IIngredient[] = [];
  @Output() selectIngredient = new EventEmitter<IIngredient>();
}
