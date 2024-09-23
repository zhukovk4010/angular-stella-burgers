import {Component, HostListener, Injectable, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {HeaderMobileComponent} from "./common-ui/header/header-mobile/header-mobile.component";
import {HeaderDesktopComponent} from "./common-ui/header/header-desktop/header-desktop.component";
import {ConstructorPageComponent} from "./pages/constructor-page/constructor-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderMobileComponent, HeaderDesktopComponent, ConstructorPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

@Injectable({providedIn: 'root'})

export class AppComponent {
  windowWidth = signal<number>(window.innerWidth);

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    this.windowWidth.set(width);
  }
}
