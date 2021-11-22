import { Component } from '@angular/core';
import { Country } from '../../intefaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `
  ]
})
export class PorPaisComponent {

  public termino: string = "";
  public errores: boolean = false;
  public paises: Country[] = [];
  public paisesSugeridos: Country[] = [];
  public mostrarSugerencias: boolean = false;

  constructor (private paisService: PaisService){

  }

  public buscar( termino: string ){
    this.errores = false;
    this.termino = termino;
    this.mostrarSugerencias = false;

    this.paisService.buscarPais(this.termino)
      .subscribe( 
        (paises) => {
          this.paises = paises;
        },
        (err) => {
          this.errores = true;
          this.paises = [];
        });
  }

  public sugerencias ( termino: string ){
    this.errores = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais( termino )
      .subscribe( 
        paises => this.paisesSugeridos = paises,
        (err) => this.paisesSugeridos = [] );
  }

}
