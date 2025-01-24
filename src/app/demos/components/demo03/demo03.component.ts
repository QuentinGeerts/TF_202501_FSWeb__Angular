import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-demo03',
  standalone: false,

  templateUrl: './demo03.component.html',
  styleUrl: './demo03.component.scss'
})
export class Demo03Component implements OnInit {

  style: string = 'italic';
  weight: string = 'bold';
  size: number = 1;

  isActive: boolean = true;
  compteur: number = 0;

  selectedColor: string = '';

  styles!: { 'font-style': string, 'font-weight': string, 'font-size': string; };

  users: User[] = [
    { id: 1, lastname: 'Doe', firstname: 'John' },
    { id: 2, lastname: 'Doe', firstname: 'Jane' },
    { id: 3, lastname: 'Doe', firstname: 'Jim' },
    { id: 4, lastname: 'Doe', firstname: 'Jill' },
    { id: 5, lastname: 'Doe', firstname: 'Jack' },
    { id: 6, lastname: 'Doe', firstname: 'Jenny' },
  ];

  ngOnInit (): void {
    this.styles = {
      'font-style': this.style,
      'font-weight': this.weight,
      'font-size': this.size + 'rem'
    };
  }

  toggleStyle () {
    this.style = this.style === 'italic' ? 'normal' : 'italic';
    this.styles['font-style'] = this.style;
  }

  toggleWeigt () {
    this.weight = this.weight === 'bold' ? 'normal' : 'bold';
    this.styles['font-weight'] = this.weight;
  }

  toggleSize () {
    this.size = this.size === 1 ? 1.5 : 1;
    this.styles['font-size'] = this.size + 'rem';
  }

  trackById (index: number, item: User) {
    return item.id;
  }

}
