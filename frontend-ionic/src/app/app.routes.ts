import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { UsuariosPage } from './usuarios/usuarios.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'usuarios',
    component: UsuariosPage
  }
];
