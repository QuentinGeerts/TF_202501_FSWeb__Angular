import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { MaskPipe } from './pipes/mask.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';



@NgModule({
  declarations: [
    NavbarComponent,
    CapitalizePipe,
    TruncatePipe,
    MaskPipe
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
    CapitalizePipe,
    TruncatePipe,
    MaskPipe,
  ]
})
export class SharedModule { }
