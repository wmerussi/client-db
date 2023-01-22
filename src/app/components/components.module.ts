import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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

@NgModule({
  declarations: [
    ButtonComponent,
    ClientFormComponent,
    ClientListComponent,
    ClientInfoComponent,
    CNPJPipe,
    InfoMessageComponent,
    MainHeaderComponent,
    PageHeaderComponent,
    SelectComponent,
    StatusComponent,
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [
    ButtonComponent,
    ClientFormComponent,
    ClientListComponent,
    ClientInfoComponent,
    CNPJPipe,
    InfoMessageComponent,
    MainHeaderComponent,
    PageHeaderComponent,
    SelectComponent,
    StatusComponent,
  ],
})
export class ComponentsModule {}
