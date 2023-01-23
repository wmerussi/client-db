import { Component, Input } from '@angular/core';
import { Icon } from 'src/app/types/icon.type';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
})
export class HeadingComponent {
  @Input() icon: Icon = 'person';
  @Input() title: string = '';
}
