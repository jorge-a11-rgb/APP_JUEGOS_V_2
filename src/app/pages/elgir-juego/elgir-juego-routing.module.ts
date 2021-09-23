import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElgirJuegoPage } from './elgir-juego.page';

const routes: Routes = [
  {
    path: '',
    component: ElgirJuegoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElgirJuegoPageRoutingModule {}
