import { Component, OnInit } from '@angular/core';
//importamos nuestro modelo
import { Hero } from "../Models/hero";

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {
  //Propiedades
  //contruimos un array de poderes
  powers :string[] = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];
  //construimos nuestro modelo
  model :Hero = new Hero(18, 'Dr IQ', this.powers[0], 'ChuckOverstreet')
  //esta propiedad nos dira si el formulario a sido enviado
  submitted :Boolean = false;
  
  constructor() { }
  //Funciones
  ngOnInit() {
  }

  //funcion de enviar el formulario
  onSubmit(): void{
    this.submitted = true 
    console.log('formulario enviado? :', this.submitted);
  }
  //generamos el json del modelo para poder debugar , ademas generamos una copia del objeto.
  get diagnostic(): string{
    return JSON.stringify(this.model);
  }

}
