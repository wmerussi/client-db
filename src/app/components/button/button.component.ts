import { Component, Input } from '@angular/core';
import { StyleClass } from 'src/app/interfaces/style-class.interface';
import { Button } from 'src/app/type/button.type';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() type: Button | undefined;

  buttonClass(): StyleClass {
    return {
      [`button__${this.type}`]: !!this.type,
    };
  }
}
