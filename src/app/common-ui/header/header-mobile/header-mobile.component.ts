import { Component } from '@angular/core';
import {SvgIconComponent} from "../../svg-icon/svg-icon.component";

@Component({
  selector: 'app-header-mobile',
  standalone: true,
  imports: [
    SvgIconComponent
  ],
  templateUrl: './header-mobile.component.html',
  styleUrl: './header-mobile.component.scss'
})
export class HeaderMobileComponent {

}
