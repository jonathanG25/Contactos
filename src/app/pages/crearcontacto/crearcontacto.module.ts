import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearcontactoPageRoutingModule } from './crearcontacto-routing.module';

import { CrearcontactoPage } from './crearcontacto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearcontactoPageRoutingModule
  ],
  declarations: [CrearcontactoPage]
})
export class CrearcontactoPageModule {}
