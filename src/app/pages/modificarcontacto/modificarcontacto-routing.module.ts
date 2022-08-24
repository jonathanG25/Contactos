import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarcontactoPage } from './modificarcontacto.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarcontactoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarcontactoPageRoutingModule {}
