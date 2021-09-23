import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuario } from 'src/app/model/Usuario';

import { PComprador } from '../../model/PComprador';
/* eslint-disable prefer-const */

import { AfterViewInit, ElementRef,  ViewChild } from '@angular/core';

import { $ } from 'protractor';

import { createAnimation } from '@ionic/angular';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-comprador',
  templateUrl: 'comprador.page.html',
  styleUrls: ['comprador.page.scss'],
})

export class CompradorPage implements OnInit, AfterViewInit
{
  @ViewChild('t', { read: ElementRef, static: true}) t: ElementRef;

  public usuario: Usuario;



  public pcomprador: PComprador = new PComprador();

  /*
    En el constructor del HomePage se ponen como parametros los siguientes objetos:
      (1) activeroute (del tipo de dato ActivatedRoute) y router (del tipo de dato Router),
      que se usarán para obtener los datos enviados por la página que invocó a "home".
      (2) alertController (del tipo de dato AlertController), que se usará para mostrar
      mensajes emergentes en la pantalla.

    Nótese que los parámetros tuvieron que declararse con "private", y esto es necesario
    para que los parámetros pasen a considerarse automáticamente como propiedades
    de la clase "HomePage" y de este modo puedan usarse dentro de los otros métodos.
   */
   constructor(
        private activeroute: ActivatedRoute
      , private router: Router
      , private alertController: AlertController
      ,private animationController: AnimationController
    ,private activateroute: ActivatedRoute
    ,private alterControler: AlertController) {}

public ngOnInit() {
  this.pcomprador.rut = 0;
  this.pcomprador.nombre = 'Ingresa tu nombre';
  this.pcomprador.apellido = 'Ingresa tu apellido';
  this.pcomprador.direccion = 'Ingresa tu domicilio';
}
public ngAfterViewInit(): void {
  let animation = this.animationController.create()
    .addElement(this.t.nativeElement)

    .duration(2500)
    .iterations(Infinity)

    .fromTo('opacity', 1, 0.2);

  animation.play();
}

public limpiarFormulario(): void {
  /*
    El método limpiar recorre cada uno de los campos de la propiedad persona,
    de modo que la variable "key" va tomando el nombre de dichos campos (nombre,
    apellido, etc.) y "value" adopta el valor que tiene en ese momento el
    campo asociado a key.
  */
  for (const [key, value] of Object.entries(this.pcomprador)) {
    /*
      Con la siguiente instrucción se cambia el valor de cada campo
      de la propiedad persona, y como los controles gráficos están
      asociados a dichos nombres de campos a través de ngModel, entonces
      al limpiar el valor del campo, también se limpia el control gráfico.
    */
      Object.defineProperty(this.pcomprador, key, {value: ''});
    }
  }

  public mostrarDatosPersona(): void {

    // Si el usuario no ingresa al menos el nombre o el apellido, se mostrará un error
    if (this.pcomprador.nombre.trim() === '' && this.pcomprador.apellido === '' && this.pcomprador.direccion === '') {
      this.presentAlert('Datos personales', 'Para mostrar los datos del comprador, '
        + 'al menos debes ingresar todos los campos');
      return;
    }

    // Mostrar un mensaje emergente con los datos de la persona
    const mensaje =
       '<br>Nombre: ' + this.pcomprador.nombre
      + '<br>Apellido: ' + this.pcomprador.apellido
      + '<br>Direccion: ' + this.pcomprador.direccion;

    this.presentAlert('Datos personales', mensaje);
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
