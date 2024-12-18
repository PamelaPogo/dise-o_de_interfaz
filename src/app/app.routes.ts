import { Routes } from '@angular/router';

<<<<<<< HEAD
export const routes: Routes = [
    {path: 'inicio', loadChildren:()=>import('./inicio/inicio.module').then(m=>m.InicioModule)},
    {path: '', redirectTo: '/inicio/menu-tareas', pathMatch: 'full'}

];
=======
export const routes: Routes = [];
>>>>>>> e566cf03f8675f780590c52777e0958b6531272d
