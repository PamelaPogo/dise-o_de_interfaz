import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';

import { InicioRoutingModule } from './inicio-routing.module';
import { MenuTareasComponent } from './menu-tareas/menu-tareas.component';
import { Matriz1Component } from './matriz1/matriz1.component';
import { Matriz2Component } from './matriz2/matriz2.component';
import { SpeedDialModule } from 'primeng/speeddial';
import { FormsComponent } from './forms/forms.component';
import { CarruselComponent } from './carrusel/carrusel.component';

@NgModule({
  declarations: [
    MenuTareasComponent,
    Matriz1Component,
    Matriz2Component,
    CarruselComponent,  // Declaramos otros componentes
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    InputTextModule,
    CarouselModule,
    TagModule,
    SpeedDialModule,
    FormsComponent,  // FormsComponent ya está importado correctamente como standalone
  ]
})
export class InicioModule { }
