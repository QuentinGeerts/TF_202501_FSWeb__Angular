import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { Demo01Component } from './components/demo01/demo01.component';
import { Demo02Component } from './components/demo02/demo02.component';
import { Demo03Component } from './components/demo03/demo03.component';
import { DemosRoutingModule } from './demos-routing.module';
import { DemosComponent } from './demos.component';


@NgModule({
  declarations: [
    Demo01Component,
    DemosComponent,
    Demo02Component,
    Demo03Component,
  ],
  imports: [
    CommonModule,
    DemosRoutingModule,
    SharedModule,
  ]
})
export class DemosModule { }
