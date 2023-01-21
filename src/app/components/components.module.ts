import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientInfoComponent } from './client-info/client-info.component';
import { ClientListComponent } from './client-list/client-list.component';
import { HomeComponent } from './home/home.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { StatusComponent } from './status/status.component';

@NgModule({
  declarations: [
    ClientListComponent,
    ClientInfoComponent,
    HomeComponent,
    MainHeaderComponent,
    StatusComponent,
  ],
  imports: [CommonModule],
  exports: [
    ClientListComponent,
    ClientInfoComponent,
    HomeComponent,
    MainHeaderComponent,
    StatusComponent,
  ],
})
export class ComponentsModule {}
