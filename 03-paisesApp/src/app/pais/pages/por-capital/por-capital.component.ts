import { Component, Input } from '@angular/core';
import { Country } from '../../intefaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  public termino: string = "";
  public errores: boolean = false;
  public paises: Country[] = [];

  constructor (private paisService: PaisService){

  }

  public buscar( termino: string ){
    this.errores = false;
    this.termino = termino;

    this.paisService.buscarCapital(this.termino)
      .subscribe( 
        (paises) => {
          this.paises = paises;
        },
        (err) => {
          this.errores = true;
          this.paises = [];
        });
  }

}
