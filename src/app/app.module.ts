import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { AddComponent } from './views/add/add.component';
import { HomeComponent } from './views/home/home.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { EditComponent } from './views/edit/edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'adicionar', component: AddComponent },
  { path: 'editar', component: EditComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AddComponent,
    AppComponent,
    EditComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, ComponentsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
