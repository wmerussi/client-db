import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { ClientForm } from 'src/app/interfaces/client-form.interface';
import { ClientInfo } from 'src/app/interfaces/client-info.interface';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
})
export class ClientFormComponent implements OnInit {
  @Input() clientInfo: ClientInfo | undefined;
  @Output() onSubmit: EventEmitter<ClientInfo> = new EventEmitter<ClientInfo>();

  public selectValues = ['Ativo', 'Inativo'];
  public showModal: boolean = false;
  public showErrors: boolean = false;
  public selectValue: string = '';

  public formGroup: FormGroup = new FormGroup({});

  ngOnInit() {
    const id = this.clientInfo?.id || 0;
    const name = this.clientInfo?.name || '';
    const cnpj = this.clientInfo?.cnpj || '';
    const status = this.clientInfo?.status || '';

    this.selectValue = status;

    this.formGroup = new FormGroup<ClientForm>({
      id: new FormControl(id, [Validators.required]),
      name: new FormControl(name, [Validators.required]),
      cnpj: new FormControl(cnpj, [Validators.required]),
      status: new FormControl(status, [Validators.required]),
    });
  }

  submit() {
    const controls: string[] =
      (this.formGroup && Object.keys(this.formGroup.controls)) || [];

    const formHasError = controls.reduce(
      (hasError: boolean, fieldName: string) => {
        const field: AbstractControl | null = this.formGroup?.get(fieldName);
        return hasError || !!field?.errors;
      },
      false
    );

    if (formHasError) {
      this.showErrors = true;
      return;
    }

    const formValues = this.formGroup?.value as ClientInfo;
    this.onSubmit.emit(formValues);
  }

  changeStatus(status: string) {
    const statusControl = this.formGroup.get('status');
    statusControl?.setValue(status);
  }

  hasError(fieldName: string): boolean {
    return this.showErrors && !!this.formGroup.get(fieldName)?.errors;
  }
}
