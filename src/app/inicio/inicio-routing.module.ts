import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuTareasComponent } from './menu-tareas/menu-tareas.component';
import { Matriz1Component } from './matriz1/matriz1.component';
import { Matriz2Component } from './matriz2/matriz2.component';
import { BotonesComponent } from './botones/botones.component';
import { FormsComponent } from './forms/forms.component';
import { CarruselComponent } from './carrusel/carrusel.component';

const routes: Routes = [
  
  { path: "menu-tareas", component: MenuTareasComponent },
  { path: "matriz1", component: Matriz1Component },
  { path: "matriz2", component: Matriz2Component },
  { path: 'forms', component: FormsComponent },
  { path: 'cards', loadComponent:()=>import('./cards/cards.component').then((m) => m.CardsComponent), },
  { path: "botones", loadComponent:()=>import('./botones/botones.component').then((m) => m.BotonesComponent), },
  { path: "forms", loadComponent:()=>import('./forms/forms.component').then((m) => m.FormsComponent), },
  {path: 'carrusel',component: CarruselComponent, loadChildren: () => import('./carrusel/carrusel.component').then(m => m.CarruselComponent), },
  { path: "", redirectTo: '../inicio/menu-tareas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
