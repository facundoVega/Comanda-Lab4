import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { InicialComponent } from '../inicial/inicial.component';
import { JuegosComponent } from '../juegos/juegos.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { ValidadoraService }   from "../validadora.service";
import { PptComponent} from '../ppt/ppt.component';
import { AdivinaComponent} from '../adivina/adivina.component';
import { AgilidadComponent} from '../agilidad/agilidad.component';
import { MemoriaComponent} from '../memoria/memoria.component';
import { MisPuntosComponent} from '../mis-puntos/mis-puntos.component';
import {RankingComponent } from '../ranking/ranking.component';
const rutas: Routes = [
  { path: "", component: LoginComponent },

  { path: "Inicial", component: InicialComponent, canActivate: [ValidadoraService], children:[
    {path:"juegos", component:JuegosComponent, canActivate: [ValidadoraService]},
    {path:"ppt", component:PptComponent, canActivate: [ValidadoraService] },
    {path:"agilidad", component:AgilidadComponent, canActivate: [ValidadoraService] },
    {path:"memoria", component:MemoriaComponent ,canActivate: [ValidadoraService]  },
   
    { path: "Puntos", component: RankingComponent, canActivate: [ValidadoraService]  },
    {path:"adivina", component:AdivinaComponent, canActivate: [ValidadoraService] }
    ]},
    { path: "**", component: NotFoundComponent }
];

/*const rutas: Routes = [
  { path: "", component: InicialComponent },
 
  { path: "Inicial", component: InicialComponent, children:[
    {path:"juegos", component:JuegosComponent, },
    {path:"ppt", component:PptComponent},
    {path:"agilidad", component:AgilidadComponent},
    {path:"memoria", component:MemoriaComponent},
    { path: "MisPuntos", component: MisPuntosComponent },
    { path: "Ranking", component: RankingComponent },
    {path:"adivina", component:AdivinaComponent}
  ]},
    { path: "**", component: NotFoundComponent }
];*/


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class RuteoModule { }
