import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo01',
  standalone: false,

  templateUrl: './demo01.component.html',
  styleUrl: './demo01.component.scss'
})
export class Demo01Component implements OnInit {

  // Méthode appelée à la création du composant
  ngOnInit (): void {
    this.nom = "Geerts";
    this.dateNaissance = new Date();
  }

  prenom: string = "Quentin";
  nom!: string; // Definite assignement assertion
  declare dateNaissance: Date; // Ambient declaration

  compteur: number = 0;

  incrementer () {
    this.compteur++; // Version raccourcie de: this.compteur = this.compteur + 1; ou this.compteur += 1;
  }


  source: string = "/images/chat.jpg";
  alt: string = "Un chat";
  width: number = 200;
  heigth: number = 200;

  message: string = "Bonjour";

  changeValue (event: Event) {
    console.log("Event: ", event);
    console.log("Event: ", event.target);
    console.log("Event: ", (event.target as HTMLInputElement).value);
    this.message = (event.target as HTMLInputElement).value;
  }

}
