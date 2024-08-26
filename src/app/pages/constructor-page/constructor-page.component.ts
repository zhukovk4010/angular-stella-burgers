import {Component, inject} from '@angular/core';
import {IngredientsSwitchComponent} from "../../common-ui/ingredients-switch/ingredients-switch.component";
import {IngredientsService} from "../../data/services/ingredients.service";
import {IIngredient} from "../../data/interfaces/Ingredient.interface";

@Component({
  selector: 'app-constructor-page',
  standalone: true,
  imports: [
    IngredientsSwitchComponent
  ],
  templateUrl: './constructor-page.component.html',
  styleUrl: './constructor-page.component.scss'
})
export class ConstructorPageComponent {
  profileService = inject(IngredientsService);

  ingredientsList: IIngredient[] = [];

  constructor() {
    this.profileService.getIngredients().subscribe(res => {
      if (res.success) {
        this.ingredientsList = res.data;
      }
    })

  }
}
