import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IIngredient} from "../../../types/types";
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
  @Input({ required: true }) ingredient: IIngredient | null = null;
  @Output() selectIngredient = new EventEmitter<IIngredient>();
}
