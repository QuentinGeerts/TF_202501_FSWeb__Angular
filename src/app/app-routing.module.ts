import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },


  // {
  //   path: 'demos', children: [

  //     { path: '', component: DemosComponent },
  //     { path: 'demo01', component: Demo01Component },

  //   ]
  // },


  { path: 'demos', loadChildren: () => import('./demos/demos.module').then(m => m.DemosModule) },

  // { path: 'demo01', component: Demo01Component },

  // Lazy-Loading: Chargement à la demande
  // => On ne charge le module "exos" QUE quand on arrive la route "exos"
  { path: 'exos', loadChildren: () => import('./exos/exos.module').then(m => m.ExosModule) },


  // Redirection vers le path 'home' quand l'URL est vide.
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // Attention, doit se trouver tout à la fin, si aucun path match, alors redirige vers NotFound
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
