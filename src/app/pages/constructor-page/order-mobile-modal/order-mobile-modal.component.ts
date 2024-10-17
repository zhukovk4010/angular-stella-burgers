import {Component, EventEmitter, Output, output} from '@angular/core';
import {SvgIconComponent} from "../../../common-ui/svg-icon/svg-icon.component";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-order-mobile-modal',
  standalone: true,
  imports: [
    SvgIconComponent
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
  @Output() closeOrder = new EventEmitter<void>();

  public onCloseOrderButtonClick = () => {
    this.closeOrder.emit();
  }
}
