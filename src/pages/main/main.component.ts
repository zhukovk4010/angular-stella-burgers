import { Component } from '@angular/core';
import {
    IngredientCategorySwitcherComponent
} from "../../features/ingredient-category-switcher/ingredient-category-switcher.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
    imports: [
        IngredientCategorySwitcherComponent
    ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
