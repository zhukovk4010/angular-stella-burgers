import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SvgIconComponent} from "../../../common-ui/svg-icon/svg-icon.component";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {IIngredient} from "../../../data/interfaces/Ingredient.interface";
import {
  OrderIngredientMobileComponent
} from "../../../common-ui/order-ingredient-mobile/order-ingredient-mobile.component";

@Component({
  selector: 'app-order-mobile-modal',
  standalone: true,
  imports: [
    SvgIconComponent,
    OrderIngredientMobileComponent
  ],
  templateUrl: './order-mobile-modal.component.html',
  styleUrl: './order-mobile-modal.component.scss',
  animations: [
    trigger(
      'openClose', [
        state(
          'open',
          style({
            transform: 'translateX(0)',
            opacity: 1,
          })
        ),
        transition('void => open', [
          animate('0.3s ease-out')
        ])
      ]
    )
  ]
})
export class OrderMobileModalComponent {
  @Input({required: true}) selectedIngredientsList!: IIngredient[];
  @Output() closeOrder = new EventEmitter<void>();

  public onCloseOrderButtonClick = () => {
    this.closeOrder.emit();
  }
}
