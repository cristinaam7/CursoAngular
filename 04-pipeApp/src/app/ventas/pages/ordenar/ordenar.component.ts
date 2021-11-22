import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  public enMayusculas: boolean = false;
  public ordenarPor: string = '';

  public heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Linterna verde',
      vuela: true,
      color: Color.verde
    }
  ]

  public cambiarMayusculas(){
    this.enMayusculas = !this.enMayusculas;
  }

  public cambiarOrden(valor: string){
    this.ordenarPor = valor;
  }
}
