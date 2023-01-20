import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { MainHeaderComponent } from './main-header/main-header.component';

@NgModule({
  declarations: [HomeComponent, MainHeaderComponent],
  imports: [],
  exports: [HomeComponent, MainHeaderComponent],
})
export class ComponentsModule {}
