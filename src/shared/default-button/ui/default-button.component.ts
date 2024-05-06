import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-default-button',
  standalone: true,
  imports: [],
  templateUrl: './default-button.component.html',
  styleUrl: './default-button.component.scss'
})
export class DefaultButtonComponent {
  @Input({ required: true }) buttonName: string = '';
}
