import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  standalone: true,
  imports: [],
  template: `<svg [attr.width]="width" [attr.height]="height">
                <use [attr.href]="href" [attr.width]="width" [attr.height]="height"></use>
             </svg>`,
  styleUrl: './svg-icon.component.scss'
})
export class SvgIconComponent {
  @Input({required: true}) icon = '';
  @Input() width = '24';
  @Input() height = '24';

  get href() {
    return `/assets/icons/${this.icon}.svg#${this.icon}`;
  }
}
