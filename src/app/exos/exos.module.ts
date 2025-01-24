import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
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
    ExosRoutingModule,
    SharedModule,
  ]
})
export class ExosModule { }
