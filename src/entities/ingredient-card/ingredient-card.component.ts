import {Component, Input} from '@angular/core';

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
  selector: 'app-ingredient-card',
  standalone: true,
  imports: [],
  templateUrl: './ingredient-card.component.html',
  styleUrl: './ingredient-card.component.scss'
})
export class IngredientCardComponent {
  @Input({ required: true }) ingredient: IIngredient | null = null;
}
