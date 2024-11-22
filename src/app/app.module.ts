import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button'; // Módulo para los botones de PrimeNG
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule  // Importar el módulo del botón de PrimeNG
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
