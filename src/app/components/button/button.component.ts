import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StyleClass } from 'src/app/interfaces/style-class.interface';
import { ButtonRole } from 'src/app/type/button-role.type';
import { ButtonType } from 'src/app/type/button-type.type';
import { Icon } from 'src/app/type/icon.type';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() role: ButtonRole | undefined;
  @Input() icon?: Icon | undefined;
  @Input() ariaLabel?: string = '';
  @Input() iconOnly?: boolean = false;
  @Input() type?: ButtonType = 'square';

  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  buttonClass(): StyleClass {
    return {
      [`button__${this.role}`]: !!this.role,
      [`button__${this.type}`]: !!this.type,
    };
  }

  click() {
    this.onClick.emit();
  }
}
