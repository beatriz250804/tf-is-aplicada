import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authority',
    data: { pageTitle: 'backendApp.adminAuthority.home.title' },
    loadChildren: () => import('./admin/authority/authority.routes'),
  },
  {
    path: 'cliente',
    data: { pageTitle: 'backendApp.cliente.home.title' },
    loadChildren: () => import('./cliente/cliente.routes'),
  },
  {
    path: 'producto',
    data: { pageTitle: 'backendApp.producto.home.title' },
    loadChildren: () => import('./producto/producto.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
