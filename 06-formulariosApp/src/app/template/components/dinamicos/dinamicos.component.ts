import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string,
  favoritos: Favorito[]
}

interface Favorito {
  id: number,
  nombre: string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  @ViewChild('miForm') miForm!: NgForm;

  public persona: Persona = {
    nombre: 'Cris',
    favoritos: [
      {id: 1, nombre: 'Pam'},
      {id: 2, nombre: 'Tom Raider'}
    ]
  }

  public nuevoFavorito: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public guardar(){
    console.log("Formulario enviado");
  }

  public validarNombre(){
    console.log(this.miForm);
    return this.miForm?.controls.nombre?.errors;
  }

  public eliminarFavorito(i: number){
    this.persona.favoritos.splice(i, 1);
  }

  public agregarFavorito(){
    this.persona.favoritos.push(
      {
        id: this.persona.favoritos.length+1, 
        nombre: this.nuevoFavorito
      });
      this.nuevoFavorito = "";
  }

}
