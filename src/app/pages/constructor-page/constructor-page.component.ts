import {Component, computed, signal} from '@angular/core';
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
import {OrderMobileModalComponent} from "./order-mobile-modal/order-mobile-modal.component";

@Component({
  selector: 'app-constructor-page',
  standalone: true,
  imports: [
    IngredientsSwitchComponent,
    IngredientCardComponent,
    SvgIconComponent,
    OrderMobileModalComponent
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
  private _ingredientsList = signal<IIngredient[]>([]);
  public selectedIngredientsList = signal<IIngredient[]>([]);
  public isOrderMobileModalOpen = signal<boolean>(false);

  public bunsList = computed(() => {
    if (this._ingredientsList().length) {
      return this._ingredientsList().filter(ingredient => ingredient.type === 'bun');
    } else {
      return [];
    }
  })

  public mainList = computed(() => {
    if (this._ingredientsList().length) {
      return this._ingredientsList().filter(ingredient => ingredient.type === 'main');
    } else {
      return [];
    }
  })

  public saucesList = computed(() => {
    if (this._ingredientsList().length) {
      return this._ingredientsList().filter(ingredient => ingredient.type === 'sauce');
    } else {
      return [];
    }
  })

  public orderSum = computed(() => {
    return this.selectedIngredientsList().reduce((sum, current) => sum + current.price, 0)
  })

  constructor(private ingredientService: IngredientsService) {
    this.ingredientService.getIngredients().subscribe(res => {
      if (res.success) {
        this._ingredientsList.set(res.data);
      }
    })
  }

  public selectIngredient = (ingredient: IIngredient) => {
    this.selectedIngredientsList
      .update(selectedIngredients => selectedIngredients.concat(ingredient));
  }

  //function for ingredient counter
  public checkIngredientSelected = (id: string) => {
    let selectedNumber = 0;

    this.selectedIngredientsList().forEach(ingredient => {
      if (ingredient._id === id) selectedNumber++;
    })

    return selectedNumber;
  }

  public onOrderButtonClick = () => {
    this.isOrderMobileModalOpen.set(true);
    document.body.style.overflowY = 'hidden';
  }

  public closeOrderModal = () => {
    this.isOrderMobileModalOpen.set(false);
    document.body.style.overflowY = '';
  }
}
