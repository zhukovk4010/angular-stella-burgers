import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IIngredient} from "../../data/interfaces/Ingredient.interface";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-ingredient-card',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './ingredient-card.component.html',
  styleUrl: './ingredient-card.component.scss'
})
export class IngredientCardComponent {
  @Input() ingredient!: IIngredient;
  @Input() selectedNumber!: number;
  @Output() onAddIngredient = new EventEmitter<IIngredient>();
}
