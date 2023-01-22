import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[cnpj]',
})
export class CnpjMaskDirective implements AfterViewInit {
  @HostListener('keyup') onKeyUp() {
    this.applyCnpjMask();
  }

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.applyCnpjMask();
  }

  applyCnpjMask() {
    const value = this.el.nativeElement.value.replace(/[\D\/\-\.]/g, '');
    const trimValue = !!value ? `${parseInt(value)}`.padStart(15, '0') : '';

    const maskedValue = trimValue.replace(
      /(\d{3})(\d{3})(\d{3})(\d{4})(\d{2})/g,
      '$1.$2.$3/$4-$5'
    );

    this.el.nativeElement.value = maskedValue;
  }
}
