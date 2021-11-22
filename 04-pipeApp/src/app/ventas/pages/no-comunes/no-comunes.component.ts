import { Component } from '@angular/core';

import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect Pipe
  public nombre: string = "Cristina";
  public genero: string = "a";

  public invitacionGenero = {
    'f': 'invitarla',
    'm': 'invitarlo',
    'a': 'invitarle'
  }

  //i18nPlural Pipe
  public clientes: string[] = ['Eliz', 'Cris', 'Pilar', 'Fran', 'Carlos'];
  public clientesPlural = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  };

  //Slice Pipe
  public cambiarNombre(){
    this.nombre = 'Antonio';
    this.genero = 'm';
  }

  public quitarCliente(){
    this.clientes.shift();
  }

  //KeyValue Pipe
  public persona = {
    nombre: 'Cris',
    edad: '40',
    direccion: 'Huesca'
  }

  //Json Pipe
  public heroes = ['Superwoman', 'Spiderman', 'Batwoman'];

  //Asyc Pipe
  miObservable = interval(5000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Tenemos data de promesa');
      }, 3500);
  });

}
