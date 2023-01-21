import { NgModule } from '@angular/core';
import { ClientInfoComponent } from './client-info/client-info.component';

import { ClientListComponent } from './client-list/client-list.component';
import { HomeComponent } from './home/home.component';
import { MainHeaderComponent } from './main-header/main-header.component';

@NgModule({
  declarations: [
    ClientListComponent,
    ClientInfoComponent,
    HomeComponent,
    MainHeaderComponent,
  ],
  imports: [],
  exports: [
    ClientListComponent,
    ClientInfoComponent,
    HomeComponent,
    MainHeaderComponent,
  ],
})
export class ComponentsModule {}
