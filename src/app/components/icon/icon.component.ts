import { Component, Input } from '@angular/core';
import { StyleClass } from 'src/app/interfaces/style-class.interface';
import { Icon } from 'src/app/type/icon.type';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
})
export class IconComponent {
  @Input() name: Icon | undefined;
  @Input() spin: boolean = false;

  iconClass(): StyleClass {
    return {
      'icon--spin': this.spin,
    };
  }
}
