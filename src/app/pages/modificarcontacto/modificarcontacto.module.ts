import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarcontactoPageRoutingModule } from './modificarcontacto-routing.module';

import { ModificarcontactoPage } from './modificarcontacto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarcontactoPageRoutingModule
  ],
  declarations: [ModificarcontactoPage]
})
export class ModificarcontactoPageModule {}
