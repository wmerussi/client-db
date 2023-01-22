import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @Input() text: string | undefined;
  @Input() onContinue: (() => void) | undefined;

  @Output() onButtonClick: EventEmitter<void> = new EventEmitter<void>();

  buttonClick() {
    this.onButtonClick.emit();
  }
}
