import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { ClientInfo } from 'src/app/interfaces/client-info.interface';
import { ClientService } from 'src/app/services/client.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  templateUrl: './edit.component.html',
})
export class EditComponent {
  public clientInfo: ClientInfo | undefined;
  public showModal: boolean = false;

  constructor(
    private clientService: ClientService,
    private loadingService: LoadingService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams
      .pipe(
        switchMap((params: any) => {
          const id = params['id'];

          if (!id) {
            this.returnHome();
            return of(undefined);
          }

          return this.clientService.get(id);
        })
      )
      .subscribe({
        next: (clientInfo: ClientInfo | undefined) => {
          if (!clientInfo) {
            this.returnHome();
            return;
          }

          this.clientInfo = clientInfo;
        },
      });
  }

  submit(clientInfo: ClientInfo) {
    this.loadingService.show();

    // ! Timeout incluido somente para demonstrar o loading em funcionamento
    setTimeout(() => {
      this.clientService.editClient(clientInfo).subscribe({
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
    this.returnHome();
  }

  private returnHome() {
    this.router.navigate(['/home']);
  }
}
