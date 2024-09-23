import {Component, computed, inject, signal} from '@angular/core';
import {IngredientsSwitchComponent} from "../../common-ui/ingredients-switch/ingredients-switch.component";
import {IngredientsService} from "../../data/services/ingredients.service";
import {IIngredient} from "../../data/interfaces/Ingredient.interface";
import {IngredientCardComponent} from "../../common-ui/ingredient-card/ingredient-card.component";
import {SvgIconComponent} from "../../common-ui/svg-icon/svg-icon.component";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: 'app-constructor-page',
  standalone: true,
  imports: [
    IngredientsSwitchComponent,
    IngredientCardComponent,
    SvgIconComponent
  ],
  templateUrl: './constructor-page.component.html',
  styleUrl: './constructor-page.component.scss',
  animations: [
    trigger(
      'openClose', [
        state(
          'open',
          style({
            height: '*',
            opacity: 1,
            paddingTop: '1rem',
            paddingBottom: '1rem'
          })
        ),
        transition('void => open', [
          style({bottom: '-100px', opacity: 0, paddingTop: '0', paddingBottom: '0'}),
          animate('0.3s ease-out')
        ])
      ]
    )
  ]
})
export class ConstructorPageComponent {
  ingredientService = inject(IngredientsService);

  ingredientsList = signal<IIngredient[]>([]);
  selectedIngredientsList = signal<IIngredient[]>([])

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

  orderSum = computed(() => {
    return this.selectedIngredientsList().reduce((sum, current) => sum + current.price, 0)
  })

  selectIngredient = (ingredient: IIngredient) => {
    this.selectedIngredientsList
      .update(selectedIngredients => selectedIngredients.concat(ingredient));
  }

  //function for ingredient counter
  checkIngredientSelected = (id: string) => {
    let selectedNumber = 0;

    this.selectedIngredientsList().forEach(ingredient => {
      if (ingredient._id === id) selectedNumber++;
    })

    return selectedNumber;
  }

  constructor() {
    this.ingredientService.getIngredients().subscribe(res => {
      if (res.success) {
        this.ingredientsList.set(res.data);
      }
    })
  }
}
