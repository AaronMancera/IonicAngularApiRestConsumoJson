import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarAlertPage } from './modificar-alert.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarAlertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarAlertPageRoutingModule {}
