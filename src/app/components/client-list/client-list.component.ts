import { Component } from '@angular/core';
import { ClientInfo } from 'src/app/interfaces/client-info.interface';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
})
export class ClientListComponent {
  public clientList: ClientInfo[] | undefined;

  constructor(private client: ClientService) {}

  ngOnInit() {
    this.client.getAll().subscribe({
      next: (clientList: ClientInfo[]) => {
        this.clientList = clientList;
      },
    });
  }
}
