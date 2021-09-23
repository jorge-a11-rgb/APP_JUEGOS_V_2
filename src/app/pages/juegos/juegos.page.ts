/* eslint-disable prefer-const */

import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { $ } from 'protractor';

import { createAnimation } from '@ionic/angular';
import { Animation, AnimationController } from '@ionic/angular';
import { Usuario } from 'src/app/model/Usuario';


@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.page.html',
  styleUrls: ['./juegos.page.scss'],
})
export class JuegosPage implements OnInit, AfterViewInit
{
  @ViewChild('t', { read: ElementRef, static: true}) t: ElementRef;

  constructor(
    private animationController: AnimationController
    ,private router: Router
    ,private activateroute: ActivatedRoute
    ,private alterControler: AlertController) {}

    public ngAfterViewInit(): void {
      let animation = this.animationController.create()
        .addElement(this.t.nativeElement)

        .duration(1500)
        .iterations(Infinity)

        .fromTo('opacity', 1, 0.2);

      animation.play();
    }

  ngOnInit() {
  }

}
