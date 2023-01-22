import {
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';

import { StyleClass } from 'src/app/interfaces/style-class.interface';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
})
export class SelectComponent {
  @Input() values: string[] = [];

  @ViewChild('select') selectEl: ElementRef | undefined;

  public isOpen: boolean = false;
  public selectedValue: string | undefined;

  private unlistener: (() => void) | undefined;

  constructor(private renderer: Renderer2) {}

  ngOnDestroy() {
    if (!this.unlistener) {
      return;
    }

    this.unlistener();
  }

  toggleList() {
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      this.unlistener = this.renderer.listen(
        'document',
        'mouseup',
        (event: MouseEvent) => this.clickHandler(event)
      );
    }
  }

  selectValue(value: string) {
    this.selectedValue = value;
    this.selectEl?.nativeElement.focus();
  }

  selectClass(): StyleClass {
    return {
      'select--outline': this.isOpen,
    };
  }

  listClass(): StyleClass {
    return {
      'select__list--open': this.isOpen,
    };
  }

  private clickHandler(event: MouseEvent) {
    if (!this.unlistener) {
      return;
    }

    this.unlistener();
    this.toggleList();
  }
}
