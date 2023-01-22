import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ClientInfoComponent } from './client-info/client-info.component';
import { ClientListComponent } from './client-list/client-list.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { StatusComponent } from './status/status.component';
import { ButtonComponent } from './button/button.component';
import { CNPJPipe } from '../pipes/cnpj.pipe';
import { InfoMessageComponent } from './info-message/info-message.component';
import { HeadingComponent } from './heading/heading.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { SelectComponent } from './select/select.component';
import { IconComponent } from './icon/icon.component';
import { ModalComponent } from './modal/modal.component';
import { CnpjMaskDirective } from '../directives/cnpj-mask.directive';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ButtonComponent,
    ClientFormComponent,
    ClientListComponent,
    ClientInfoComponent,
    CNPJPipe,
    IconComponent,
    InfoMessageComponent,
    MainHeaderComponent,
    CnpjMaskDirective,
    ModalComponent,
    HeadingComponent,
    SelectComponent,
    StatusComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    ButtonComponent,
    ClientFormComponent,
    ClientListComponent,
    ClientInfoComponent,
    CNPJPipe,
    IconComponent,
    InfoMessageComponent,
    MainHeaderComponent,
    CnpjMaskDirective,
    ModalComponent,
    HeadingComponent,
    SelectComponent,
    StatusComponent,
  ],
})
export class ComponentsModule {}
