import { Component, Input } from '@angular/core';
import { ClientInfo } from 'src/app/interfaces/client-info.interface';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
})
export class ClientInfoComponent {
  @Input() clientInfo: ClientInfo | undefined;
}
