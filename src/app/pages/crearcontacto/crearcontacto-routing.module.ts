import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearcontactoPage } from './crearcontacto.page';

const routes: Routes = [
  {
    path: '',
    component: CrearcontactoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearcontactoPageRoutingModule {}
