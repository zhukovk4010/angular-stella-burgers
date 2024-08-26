import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-ingredients-switch',
  standalone: true,
  imports: [],
  templateUrl: './ingredients-switch.component.html',
  styleUrl: './ingredients-switch.component.scss'
})
export class IngredientsSwitchComponent {
  activeIngredientsCategory = signal<'rolls' | 'sauces' | 'filling'>('rolls');

  switchIngredientsCategory(sectionNumber: 'rolls' | 'sauces' | 'filling') {
    this.activeIngredientsCategory.set(sectionNumber);
  }
}
