import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule, // Important pour utiliser ngModel
    RouterModule, // Important pour utiliser les éléments du Router comme routerLink
  ],
  exports: [
    NavbarComponent,
    FormsModule,
    RouterModule,
  ]
})
export class SharedModule { }
