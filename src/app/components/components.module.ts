import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ClientInfoComponent } from './client-info/client-info.component';
import { ClientListComponent } from './client-list/client-list.component';
import { HomeComponent } from './home/home.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { StatusComponent } from './status/status.component';
import { ButtonComponent } from './button/button.component';
import { CNPJPipe } from '../pipes/cnpj.pipe';
import { ClientInfoLoaderComponent } from './client-info-loader/client-info-loader.component';

@NgModule({
  declarations: [
    ButtonComponent,
    ClientListComponent,
    ClientInfoComponent,
    ClientInfoLoaderComponent,
    CNPJPipe,
    HomeComponent,
    MainHeaderComponent,
    StatusComponent,
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [
    ButtonComponent,
    ClientListComponent,
    ClientInfoComponent,
    ClientInfoLoaderComponent,
    CNPJPipe,
    HomeComponent,
    MainHeaderComponent,
    StatusComponent,
  ],
})
export class ComponentsModule {}
