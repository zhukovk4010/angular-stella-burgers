import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {DefaultButtonComponent} from "../../../shared/default-button/";

@Component({
  selector: 'app-basket-modal',
  standalone: true,
  imports: [
    NgOptimizedImage,
    DefaultButtonComponent
  ],
  templateUrl: './basket-modal.component.html',
  styleUrl: './basket-modal.component.scss'
})
export class BasketModalComponent {

}
