import {Component, computed, inject, signal} from '@angular/core';
import {IngredientsSwitchComponent} from "../../common-ui/ingredients-switch/ingredients-switch.component";
import {IngredientsService} from "../../data/services/ingredients.service";
import {IIngredient} from "../../data/interfaces/Ingredient.interface";
import {IngredientCardComponent} from "../../common-ui/ingredient-card/ingredient-card.component";

@Component({
  selector: 'app-constructor-page',
  standalone: true,
  imports: [
    IngredientsSwitchComponent,
    IngredientCardComponent
  ],
  templateUrl: './constructor-page.component.html',
  styleUrl: './constructor-page.component.scss'
})
export class ConstructorPageComponent {
  profileService = inject(IngredientsService);

  ingredientsList = signal<IIngredient[]>([]);
  bunsList = computed(() => {
    if (this.ingredientsList().length) {
      return this.ingredientsList().filter(ingredient => ingredient.type === 'bun');
    } else {
      return [];
    }
  })

  mainList = computed(() => {
    if (this.ingredientsList().length) {
      return this.ingredientsList().filter(ingredient => ingredient.type === 'main');
    } else {
      return [];
    }
  })

  saucesList = computed(() => {
    if (this.ingredientsList().length) {
      return this.ingredientsList().filter(ingredient => ingredient.type === 'sauce');
    } else {
      return [];
    }
  })


  constructor() {
    this.profileService.getIngredients().subscribe(res => {
      if (res.success) {
        this.ingredientsList.set(res.data);
      }
    })
  }
}
