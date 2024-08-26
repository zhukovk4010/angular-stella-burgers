import {Component, ElementRef, EventEmitter, Input, OnChanges, Output, ViewChild} from '@angular/core';
import {IIngredient} from "../../../types/types";


@Component({
  selector: 'app-ingredients-list',
  standalone: true,
  templateUrl: './ingredients-list.component.html',
  styleUrl: './ingredients-list.component.scss'
})

export class IngredientsListComponent implements OnChanges {
  @Input({ required: true }) ingredientsArray: IIngredient[] = [];
  @Input({required: true}) selectedIngredientsArray: IIngredient[] = [];
  @Input({required: true}) sectionNumberToSwitch: 0 | 1 | 2 | 3 = 0;
  @Output() selectIngredient = new EventEmitter<IIngredient>();

  @ViewChild('bunsTitle') bunsTitle: ElementRef | undefined;
  @ViewChild('saucesTitle') saucesTitle: ElementRef | undefined;
  @ViewChild('fillingsTitle') fillingsTitle: ElementRef | undefined;

  //Dividing the Ingredient List
  bunsArray: IIngredient[] = [];
  saucesArray: IIngredient[] = [];
  fillingsArray: IIngredient[] = [];


  ngOnChanges() {
    console.log('rerender')
    this.bunsArray = this.ingredientsArray.filter((ingredient) => {
      return (ingredient.type === 'bun');
    });
    this.saucesArray = this.ingredientsArray.filter((ingredient) => {
      return (ingredient.type === 'sauce');
    });
    this.fillingsArray = this.ingredientsArray.filter((ingredient) => {
      return (ingredient.type === 'main');
    });

    if (this.sectionNumberToSwitch !== 0) {
      this.scrollToElement(this.sectionNumberToSwitch)
    }
  }

  scrollToElement(sectionNumber: 1 | 2 | 3) {
    switch (sectionNumber) {
      case 1:
        this.bunsTitle?.nativeElement.scrollIntoView({behavior: 'smooth', block: 'center'});
        break;
      case 2:
        this.saucesTitle?.nativeElement.scrollIntoView({behavior: 'smooth', block: 'center'});
        break;
      case 3:
        this.fillingsTitle?.nativeElement.scrollIntoView({behavior: 'smooth', block: 'center'});
        break;
      default:
        return
    }
  }

  countingTheNumberOfSelectedIngredients(ingredient: IIngredient) {
    let counter = 0;

    this.selectedIngredientsArray.forEach(selectedIngredient => {
      if (selectedIngredient._id === ingredient._id) {
        counter += 1;
      }
    });

    return counter;
  }
}
