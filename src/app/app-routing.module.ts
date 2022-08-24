import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'contactos',
    pathMatch: 'full'
  },
  {
    path: 'contactos',
    loadChildren: () => import('./pages/contactos/contactos.module').then( m => m.ContactosPageModule)
  },
  {
    path: 'crearcontacto',
    loadChildren: () => import('./pages/crearcontacto/crearcontacto.module').then( m => m.CrearcontactoPageModule)
  },
  {
    path: 'modificarcontacto',
    loadChildren: () => import('./pages/modificarcontacto/modificarcontacto.module').then( m => m.ModificarcontactoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
