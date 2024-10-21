import {Component, Input} from '@angular/core';
import {IIngredient} from "../../data/interfaces/Ingredient.interface";
import {SvgIconComponent} from "../svg-icon/svg-icon.component";

@Component({
  selector: 'app-order-ingredient-mobile',
  standalone: true,
  imports: [
    SvgIconComponent
  ],
  templateUrl: './order-ingredient-mobile.component.html',
  styleUrl: './order-ingredient-mobile.component.scss'
})
export class OrderIngredientMobileComponent {
  @Input() ingredient!: IIngredient;
}
