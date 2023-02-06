import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarAlertPageRoutingModule } from './modificar-alert-routing.module';

import { ModificarAlertPage } from './modificar-alert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarAlertPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ModificarAlertPage]
})
export class ModificarAlertPageModule {}
