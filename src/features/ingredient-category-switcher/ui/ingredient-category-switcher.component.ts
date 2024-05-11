import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-ingredient-category-switcher',
  standalone: true,
  imports: [],
  templateUrl: './ingredient-category-switcher.component.html',
  styleUrl: './ingredient-category-switcher.component.scss'
})
export class IngredientCategorySwitcherComponent {
  @Output() switchSection = new EventEmitter<1 | 2 | 3>();

  activeIngredientsCategory: 1 | 2 | 3 = 1;

  switchIngredientsCategory(sectionNumber: 1 | 2 | 3) {
    this.activeIngredientsCategory = sectionNumber;
    this.switchSection.emit(sectionNumber);
  }
}
