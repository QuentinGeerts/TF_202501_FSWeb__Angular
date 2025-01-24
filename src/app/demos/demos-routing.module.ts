import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo01Component } from './components/demo01/demo01.component';
import { DemosComponent } from './demos.component';

const routes: Routes = [
  { path: '', component: DemosComponent },
  { path: 'demo01', component: Demo01Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemosRoutingModule { }
