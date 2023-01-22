import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ClientInfoComponent } from './client-info/client-info.component';
import { ClientListComponent } from './client-list/client-list.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { StatusComponent } from './status/status.component';
import { ButtonComponent } from './button/button.component';
import { CNPJPipe } from '../pipes/cnpj.pipe';
import { InfoMessageComponent } from './info-message/info-message.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { SelectComponent } from './select/select.component';
import { IconComponent } from './icon/icon.component';

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
    PageHeaderComponent,
    SelectComponent,
    StatusComponent,
  ],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  exports: [
    ButtonComponent,
    ClientFormComponent,
    ClientListComponent,
    ClientInfoComponent,
    CNPJPipe,
    IconComponent,
    InfoMessageComponent,
    MainHeaderComponent,
    PageHeaderComponent,
    SelectComponent,
    StatusComponent,
  ],
})
export class ComponentsModule {}
