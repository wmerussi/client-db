import { Component, Input } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-info-message',
  templateUrl: './info-message.component.html',
})
export class InfoMessageComponent {
  @Input() text: string | undefined;

  public isLoading = this.loadingService.isLoading;

  constructor(private loadingService: LoadingService) {}
}
