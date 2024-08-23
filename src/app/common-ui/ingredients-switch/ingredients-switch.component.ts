import { Component } from '@angular/core';

@Component({
  selector: 'app-ingredients-switch',
  standalone: true,
  imports: [],
  templateUrl: './ingredients-switch.component.html',
  styleUrl: './ingredients-switch.component.scss'
})
export class IngredientsSwitchComponent {
  activeIngredientsCategory: 1 | 2 | 3 = 1;

  switchIngredientsCategory(sectionNumber: 1 | 2 | 3) {
    this.activeIngredientsCategory = sectionNumber;
  }
}
