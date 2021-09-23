/* eslint-disable prefer-const */

import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { $ } from 'protractor';

import { createAnimation } from '@ionic/angular';
import { Animation, AnimationController } from '@ionic/angular';
import { Usuario } from 'src/app/model/Usuario';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit, AfterViewInit {
  [x: string]: any;

  @ViewChild('titulo', { read: ElementRef, static: true}) titulo: ElementRef;
  @ViewChild('titulo2', { read: ElementRef, static: true}) titulo2: ElementRef;
  @ViewChild('titulo3', { read: ElementRef, static: true}) titulo3: ElementRef;


   constructor(
        private animationController: AnimationController
        ,private router: Router
        ,private activateroute: ActivatedRoute
        ,private alterControler: AlertController) {
          if (this.router.getCurrentNavigation().extras.state) {
            this.usuario = this.router.getCurrentNavigation().extras.state.usuario;
          }
        }

  public ngAfterViewInit(): void {
    let animation = this.animationController.create()
      .addElement(this.titulo.nativeElement)
      .addElement(this.titulo2.nativeElement)
      .addElement(this.titulo3.nativeElement)
      .duration(1500)
      .iterations(Infinity)
      .fromTo('transform', 'translate(0px)', 'translate(100px)')
      .fromTo('opacity', 1, 0.2);

    animation.play();
  }


public ngOnInit() {

}





}
