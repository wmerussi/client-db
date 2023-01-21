import { Component } from '@angular/core';
import { ClientInfo } from 'src/app/interfaces/client-info.interface';
import { ClientService } from 'src/app/services/client.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ScreenService } from 'src/app/services/screen.service';
import { ScreenSize } from 'src/app/type/screen-size.type';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
})
export class ClientListComponent {
  public clientList: ClientInfo[] = new Array(4);
  public hasResult: boolean = false;
  public screenSize = this.screenService.size;
  public isMobile: boolean = false;

  constructor(
    private client: ClientService,
    private loadingService: LoadingService,
    private screenService: ScreenService
  ) {}

  ngOnInit() {
    this.reset();
    this.loadingService.show();

    this.screenSize.subscribe((screenSize: ScreenSize) => {
      this.isMobile = screenSize === 'mobile';
    });

    this.apiCall();
  }

  get clientCount(): number {
    return this.clientList.length;
  }

  private apiCall() {
    // ! Timeout incluido somente para demonstrar o skeleton loading em funcionamento
    setTimeout(() => {
      this.client.getAll().subscribe({
        next: (clientList: ClientInfo[]) => {
          this.clientList = clientList;
          this.hasResult = !!clientList?.length;

          this.loadingService.hide();
        },
        error: () => {
          this.loadingService.hide();
        },
      });
    }, 2000);
  }

  private reset() {
    this.hasResult = false;
  }
}
