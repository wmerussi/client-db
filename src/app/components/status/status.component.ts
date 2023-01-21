import { Component, Input } from '@angular/core';
import { Status } from 'src/app/type/status.type';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
})
export class StatusComponent {
  @Input() status: Status | undefined;

  statusClass() {
    return {
      status__active: this.status === 'Ativo',
      status__inactive: this.status === 'Inativo',
    };
  }
}
