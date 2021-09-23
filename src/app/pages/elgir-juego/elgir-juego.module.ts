import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElgirJuegoPageRoutingModule } from './elgir-juego-routing.module';

import { ElgirJuegoPage } from './elgir-juego.page';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElgirJuegoPageRoutingModule,
    MatSliderModule
  ],
  declarations: [ElgirJuegoPage]
})
export class ElgirJuegoPageModule {}
