import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { ClientForm } from 'src/app/interfaces/client-form.interface';
import { ClientInfo } from 'src/app/interfaces/client-info.interface';
import { ClientService } from 'src/app/services/client.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
})
export class ClientFormComponent {
  public selectValues = ['Ativo', 'Inativo'];

  public formGroup = new FormGroup<ClientForm>({
    name: new FormControl(),
    cnpj: new FormControl(),
    status: new FormControl(),
  });

  constructor(
    private clientService: ClientService,
    private loadingService: LoadingService
  ) {}

  addNewClient() {
    this.loadingService.show();
    const formValues = this.formGroup.value as ClientInfo;

    // ! Timeout incluido somente para demonstrar o loading em funcionamento
    setTimeout(() => {
      this.clientService.addNewClient(formValues).subscribe({
        next: () => {
          this.loadingService.hide();
          this.resetForm();
        },
        error: () => {
          this.loadingService.hide();
        },
      });
    }, 2000);
  }

  changeStatus(status: string) {
    const statusControl = this.formGroup.get('status');
    statusControl?.setValue(status);
  }

  private resetForm() {
    this.formGroup.reset();
    this.formGroup.markAsUntouched();
    Object.keys(this.formGroup.controls).forEach((name) => {
      this.formGroup.get(name)?.setValue('');
    });
  }
}
