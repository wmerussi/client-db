import { Component } from '@angular/core';
import { ClientInfo } from 'src/app/interfaces/client-info.interface';
import { ClientService } from 'src/app/services/client.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
})
export class ClientListComponent {
  public clientList: ClientInfo[] = new Array(4);
  public hasResult: boolean = false;

  constructor(private client: ClientService, private loader: LoadingService) {}

  ngOnInit() {
    this.reset();
    this.loader.show();

    // ! Timeout incluido somente para demonstrar o skeleton loading em funcionamento
    setTimeout(() => {
      this.client.getAll().subscribe({
        next: (clientList: ClientInfo[]) => {
          this.clientList = clientList;
          this.hasResult = !!clientList?.length;

          this.loader.hide();
        },
        error: () => {
          this.loader.hide();
        },
      });
    }, 2000);
  }

  get clientCount(): number {
    return this.clientList.length;
  }

  private reset() {
    this.hasResult = false;
  }
}
