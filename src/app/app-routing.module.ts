import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'pass',
    loadChildren: () => import('./pages/pass/pass.module').then( m => m.PassPageModule)
  },
  {
    path: 'pass2',
    loadChildren: () => import('./pages/pass2/pass2.module').then( m => m.Pass2PageModule)
  },
  {
    path: 'comprador',
    loadChildren: () => import('./pages/comprador/comprador.module').then( m => m.CompradorPageModule)
  },
  {
    path: 'juegos',
    loadChildren: () => import('./pages/juegos/juegos.module').then( m => m.JuegosPageModule)
  },
  {
    path: 'elgir-juego',
    loadChildren: () => import('./pages/elgir-juego/elgir-juego.module').then( m => m.ElgirJuegoPageModule)
  },
  {
    path: 'camara',
    loadChildren: () => import('./pages/camara/camara.module').then( m => m.CamaraPageModule)
  },
  {
    path: 'camara',
    loadChildren: () => import('./pages/camara/camara.module').then( m => m.CamaraPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
