import {Component, HostListener, Injectable} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MainComponent} from "../pages/main/main.component";
import {HeaderDesktopComponent} from "../shared/ui/header-desktop/header-desktop.component";
import {HeaderMobileComponent} from "../shared/ui/header-mobile/header-mobile.component";
import {HttpClient} from "@angular/common/http";

interface IResponseData {
  calories: number
  carbohydrates: number
  fat: number
  image: string
  image_large: string
  image_mobile: string
  name: string
  price: number
  proteins: number
  type: string
  __v: number
  _id: number
}

interface IResponse {
  success: boolean
  data: [IResponseData]
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
  windowWidth: number = 0;
  ingredientsDataArray: [IResponseData] | [] = [];

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    this.windowWidth = width;
  }

  constructor(private http: HttpClient) {
    http.get<IResponse>('https://norma.nomoreparties.space/api/ingredients').subscribe(config => {
      this.ingredientsDataArray = config.data;
    })
  }
}
