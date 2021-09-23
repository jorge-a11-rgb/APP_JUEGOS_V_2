import { Component, OnInit } from '@angular/core';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuario } from 'src/app/model/Usuario';
import { ListaJuegos} from '../../model/ListaJuegos';
import { Estilo } from 'src/app/Model/Estilo';
import { DatosJuegos } from 'src/app/Model/DatosJuegos';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';

import { createAnimation } from '@ionic/angular';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-elgir-juego',
  templateUrl: './elgir-juego.page.html',
  styleUrls: ['./elgir-juego.page.scss'],
})
export class ElgirJuegoPage implements OnInit, AfterViewInit {
  [x: string]: any;
  @ViewChild('img', { read: ElementRef, static: true}) img: ElementRef;

public datosjuegos: DatosJuegos = new DatosJuegos();

  public listajuegos: ListaJuegos[] = [
    {id: 1, nombre: 'GOD OF WAR'},
    {id: 2, nombre: 'HORIZONT'},
    {id: 3, nombre: 'FINAL FANTASY 7 REMAKE'},
    {id:3,  nombre: 'GOD OF WAR'},
    {id: 5, nombre: 'MORTAL KOMBAT ULTIMATE'},
    {id: 6, nombre: 'PANZERS'}
  ];
  public estilo: Estilo[] = [
    {id: 1, nombre: 'Accion'},
    {id: 2, nombre: 'Pelea'},
    {id: 3, nombre: 'Aventura'},
    {id:3,  nombre: 'RPG'},
    {id: 5, nombre: 'Estrategia'},
    {id: 6, nombre: 'Deportes'}
  ];

  constructor(
    private activeroute: ActivatedRoute
  , private router: Router
  , private alertController: AlertController
  ,private animationController: AnimationController) {}

  public ngAfterViewInit(): void {
    // eslint-disable-next-line prefer-const
    let animation = this.animationController.create()
      .addElement(this.img.nativeElement)
      .iterations(Infinity)
      .fromTo('opacity', 0.01,2)
      .duration(2500)
      .fromTo('transform', 'translate(0px)', 'translate(100px)');

    animation.play();


  }

  public mostrar(): void {


    const mensaje =
    '<br>Juego: ' + this.datosjuegos.listajuegos.id + ' - '
  + this.listajuegos.find(
      n => n.id === this.datosjuegos.listajuegos.id).nombre
  +   '<br>Estilo de juego: ' + this.datosjuegos.estilo.id + ' - '
  + this.estilo.find(
      n => n.id === this.datosjuegos.estilo.id).nombre;

this.presentAlert('Seleccion de juego de video', mensaje);
}
ngOnInit(): void{

}

// Este método sirve para mostrar el mensaje emergente
public async presentAlert(titulo: string, mensaje: string) {
const alert = await this.alertController.create({
  header: titulo,
  message: mensaje,
  buttons: ['OK']
});

await alert.present();
}
}
