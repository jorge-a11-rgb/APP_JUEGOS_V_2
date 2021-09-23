
import { Component, OnInit } from '@angular/core';

import { Router, NavigationExtras } from '@angular/router';

import { ToastController } from '@ionic/angular';

import { Usuario_pass } from 'src/app/model/Usuario_pass';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { $ } from 'protractor';
import { Usuario } from 'src/app/model/Usuario';

import { createAnimation } from '@ionic/angular';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-pass',
  templateUrl: './pass.page.html',
  styleUrls: ['./pass.page.scss'],
})
export class PassPage implements OnInit, AfterViewInit {
  @ViewChild('titulo3', { read: ElementRef, static: true}) titulo3: ElementRef;



  public usuario: Usuario_pass;

  constructor(private router: Router, private toastController: ToastController, private activeroute: ActivatedRoute
    , private alertController: AlertController
    , private animationController: AnimationController) {
    this.usuario = new Usuario_pass();
    this.usuario.nombreUsuario = '';

  }
  public ngAfterViewInit(): void {
    // eslint-disable-next-line prefer-const
    let animation = this.animationController.create()
      .addElement(this.titulo3.nativeElement)
      .iterations(Infinity)
      .duration(2500)
      .fromTo('transform', 'translate(0px)', 'translate(100px)');

    animation.play();


  }

  public ngOnInit(): void {

  }

  public ingresar(): void {

    if(!this.validarUsuario(this.usuario)) {
      return;
    }

    this.mostrarMensaje('Usted a sido idenficado con exito');


    const navigationExtras: NavigationExtras = {
      state: {
        usuario: this.usuario
      }
    };
    this.router.navigate(['/pass2'], navigationExtras);
  }


  // eslint-disable-next-line @typescript-eslint/naming-convention
  public validarUsuario(usuario_pass: Usuario_pass): boolean {

    const mensajeError = usuario_pass.validarUsuario();

    if (mensajeError) {
      this.mostrarMensaje(mensajeError);
      return false;
    }

    return true;
  }

  /**
   * Muestra un toast al usuario
   *
   * @param mensaje Mensaje a presentar al usuario
   * @param duracion Duración el toast, este es opcional
   */
  async mostrarMensaje(mensaje: string, duracion?: number) {
    const toast = await this.toastController.create({
        message: mensaje,
        duration: duracion? duracion: 2000
      });
    toast.present();
  }
  public limpiarFormulario(): void{
    for (const [key, value] of Object.entries(this.usuario)) {
      Object.defineProperty(this.usuario, key, {value: ''});
  }
}
}

