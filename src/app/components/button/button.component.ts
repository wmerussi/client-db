import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

import { Subscription } from 'rxjs';

import { StyleClass } from 'src/app/interfaces/style-class.interface';
import { LoadingService } from 'src/app/services/loading.service';
import { ButtonRole } from 'src/app/type/button-role.type';
import { ButtonType } from 'src/app/type/button-type.type';
import { Icon } from 'src/app/type/icon.type';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent implements OnInit, OnDestroy {
  @Input() role: ButtonRole | undefined;
  @Input() icon?: Icon | undefined;
  @Input() ariaLabel?: string = '';
  @Input() iconOnly?: boolean;
  @Input() type?: ButtonType = 'square';
  @Input() loadingActive?: boolean;

  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  public isLoading: boolean = false;

  private subscription: Subscription | undefined;

  constructor(private loadingService: LoadingService) {}

  ngOnInit() {
    this.subscription = this.loadingService.isLoading.subscribe(
      (isLoading: boolean) => {
        this.isLoading = !!this.loadingActive && isLoading;
      }
    );
  }

  ngOnDestroy() {
    if (!this.subscription) {
      return;
    }
    this.subscription.unsubscribe();
  }

  get activeIcon(): Icon | undefined {
    return this.isLoading ? 'spinner' : this.icon;
  }

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
