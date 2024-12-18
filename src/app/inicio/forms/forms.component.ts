import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown'; 

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule, ButtonModule, CardModule, InputTextModule, DropdownModule], 
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  usuario: string = '';
  email: string = '';
  password: string = '';
  paises: any[] = []; // Definir la lista de países
  paisSeleccionado: any = null; // Definir la propiedad para el país seleccionado

  constructor() {
    // Inicializar la lista de países (esto puede ser dinámico según tus necesidades)
    this.paises = [
      { name: 'Argentina', code: 'AR' },
      { name: 'Brasil', code: 'BR' },
      { name: 'Chile', code: 'CL' }
    ];
  }

  onSubmit() {
    console.log('Usuario:', this.usuario);
    console.log('Correo Electrónico:', this.email);
    console.log('Contraseña:', this.password);
    console.log('País Seleccionado:', this.paisSeleccionado);
  }
}
