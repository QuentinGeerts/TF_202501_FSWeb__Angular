import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exo01Component } from './components/exo01/exo01.component';
import { ExosComponent } from './exos.component';

const routes: Routes = [
  {
    path: '', component: ExosComponent, children: [
      { path: 'exo01', component: Exo01Component },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExosRoutingModule { }
