import { Component } from '@angular/core';
import {IngredientsSwitchComponent} from "../../common-ui/ingredients-switch/ingredients-switch.component";

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

}
