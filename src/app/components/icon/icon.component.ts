import { Component, Input } from '@angular/core';
import { StyleClass } from 'src/app/interfaces/style-class.interface';
import { IconSize } from 'src/app/types/icon-size.type';
import { Icon } from 'src/app/types/icon.type';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
})
export class IconComponent {
  @Input() name: Icon | undefined;
  @Input() size: IconSize = 'small';
  @Input() spin: boolean = false;

  iconClass(): StyleClass {
    return {
      'icon--spin': this.spin,
      [`icon--${this.size}`]: !!this.size,
    };
  }
}
