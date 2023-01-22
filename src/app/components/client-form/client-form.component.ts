import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  public showModal: boolean = false;
  public showErrors: boolean = false;

  public formGroup = new FormGroup<ClientForm>({
    name: new FormControl('', [Validators.required]),
    cnpj: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
  });

  constructor(
    private clientService: ClientService,
    private loadingService: LoadingService,
    private router: Router
  ) {}

  addNewClient() {
    const formHasError = Object.values(this.formGroup.controls).reduce(
      (hasError: boolean, field: FormControl) => {
        if (hasError) {
          return hasError;
        }

        return !!field.errors;
      },
      false
    );

    if (formHasError) {
      this.showErrors = true;
      return;
    }

    this.loadingService.show();
    const formValues = this.formGroup.value as ClientInfo;

    // ! Timeout incluido somente para demonstrar o loading em funcionamento
    setTimeout(() => {
      this.clientService.addNewClient(formValues).subscribe({
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

  changeStatus(status: string) {
    const statusControl = this.formGroup.get('status');
    statusControl?.setValue(status);
  }

  hasError(fieldName: string): boolean {
    return this.showErrors && !!this.formGroup.get(fieldName)?.errors;
  }

  modalButtonClick() {
    this.router.navigate(['/home']);
  }
}
