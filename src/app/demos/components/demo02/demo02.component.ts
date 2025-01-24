import { Component } from '@angular/core';

@Component({
  selector: 'app-demo02',
  standalone: false,

  templateUrl: './demo02.component.html',
  styleUrl: './demo02.component.scss'
})
export class Demo02Component {

  now: Date = new Date(); // Date courante
  birthdate: Date = new Date(1996, 3, 28, 18, 15, 30); // Né le 3 avril 1996 à 18h 15min 30s 0ms

  personne: { nom: string, prenom: string, age: number; } = {
    nom: 'Doe',
    prenom: 'John',
    age: 25
  };

}
