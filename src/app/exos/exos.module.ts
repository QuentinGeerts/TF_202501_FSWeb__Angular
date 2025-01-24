import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Exo01Component } from './components/exo01/exo01.component';
import { ExosRoutingModule } from './exos-routing.module';
import { ExosComponent } from './exos.component';


@NgModule({
  declarations: [
    Exo01Component,
    ExosComponent
  ],
  imports: [
    CommonModule,
    ExosRoutingModule
  ]
})
export class ExosModule { }
