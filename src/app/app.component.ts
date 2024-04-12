import {Component, HostListener} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MainComponent} from "../pages/main/main.component";
import {HeaderDesktopComponent} from "../shared/ui/header-desktop/header-desktop.component";
import {HeaderMobileComponent} from "../shared/ui/header-mobile/header-mobile.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainComponent, HeaderDesktopComponent, HeaderMobileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  windowWidth: number = 0;

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    this.windowWidth = width;
  }
}
