import { Component } from '@angular/core';
import { Status } from 'src/app/type/status.type';
import { ClientInfo } from 'src/app/interfaces/client-info.interface';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
})
export class ClientListComponent {
  public clientInfo: ClientInfo = {
    name: 'Auto-Peças Joaquim LTDA.',
    cnpj: '000.000.000/00000-00',
    status: 'Inativo',
  };
}
