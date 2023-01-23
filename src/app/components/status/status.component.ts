import { Component, Input } from '@angular/core';
import { StyleClass } from 'src/app/interfaces/style-class.interface';
import { Status } from 'src/app/types/status.type';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
})
export class StatusComponent {
  @Input() status: Status | undefined;

  statusClass(): StyleClass {
    return {
      status__active: this.status === 'Ativo',
      status__inactive: this.status === 'Inativo',
    };
  }
}
