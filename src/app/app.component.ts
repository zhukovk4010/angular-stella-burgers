import {Component, HostListener, Injectable} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MainComponent} from "../pages/main/ui/main.component";
import {HeaderDesktopComponent} from "../widgets/header/ui/header-desktop/header-desktop.component";
import {HeaderMobileComponent} from "../widgets/header/ui/header-mobile/header-mobile.component";
import {HttpClient} from "@angular/common/http";
import {IIngredient} from "../types/types";

interface IResponse {
  success: boolean
  data: [IIngredient]
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainComponent, HeaderDesktopComponent, HeaderMobileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

@Injectable({providedIn: 'root'})

export class AppComponent {
  windowWidth: number = window.innerWidth;
  ingredientsDataArray: IIngredient[] = [];

  selectedIngredientsArray: IIngredient[] = [];

  selectIngredient = (ingredient: IIngredient) => {
    this.selectedIngredientsArray.push(ingredient);
  }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    this.windowWidth = width;
  }

  constructor(private http: HttpClient) {
    http.get<IResponse>('https://norma.nomoreparties.space/api/ingredients')
      .subscribe(config => {
      this.ingredientsDataArray = config.data;
    })
  }
}
