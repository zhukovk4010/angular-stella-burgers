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
  selector: 'app-ingredients-list',
  standalone: true,
  imports: [],
  templateUrl: './ingredients-list.component.html',
  styleUrl: './ingredients-list.component.scss'
})
export class IngredientsListComponent {
  @Input() ingredientsList: [IIngredient] | [] = [];
}
