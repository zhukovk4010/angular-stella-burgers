import {Component, Input} from '@angular/core';
import {IIngredient} from "../../../types/types";

@Component({
  selector: 'app-ingredient-card',
  standalone: true,
  imports: [],
  templateUrl: './ingredient-card.component.html',
  styleUrl: './ingredient-card.component.scss'
})
export class IngredientCardComponent {
  @Input({ required: true }) ingredient: IIngredient | null = null;
}
