import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientInfo } from 'src/app/interfaces/client-info.interface';
import { ClientService } from 'src/app/services/client.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  templateUrl: './add.component.html',
})
export class AddComponent {
  public showModal: boolean = false;

  constructor(
    private clientService: ClientService,
    private loadingService: LoadingService,
    private router: Router
  ) {}

  submit(clientInfo: ClientInfo) {
    this.loadingService.show();

    // ! Timeout incluido somente para demonstrar o loading em funcionamento
    setTimeout(() => {
      this.clientService.addNewClient(clientInfo).subscribe({
        next: () => {
          this.loadingService.hide();
          this.showModal = true;
        },
        error: () => {
          this.loadingService.hide();
        },
      });
    }, 2000);
  }

  modalButtonClick() {
    this.router.navigate(['/home']);
  }
}
