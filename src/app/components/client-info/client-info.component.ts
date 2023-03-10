import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ClientInfo } from 'src/app/interfaces/client-info.interface';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
})
export class ClientInfoComponent {
  @Input() clientInfo: ClientInfo | undefined;

  public isLoading = this.loadingService.isLoading;

  constructor(private loadingService: LoadingService, private router: Router) {}

  edit() {
    this.router.navigate(['/editar'], {
      queryParams: { id: this.clientInfo?.id },
    });
  }
}
