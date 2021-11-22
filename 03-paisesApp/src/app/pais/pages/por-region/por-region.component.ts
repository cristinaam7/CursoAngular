import { Component } from '@angular/core';
import { Country } from '../../intefaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent  {

  public paises: Country[] = []; 

  public regiones: string[] = ['africa', 'europe', 'americas', 'asia', 'oceania'];
  public regionActiva: string = "";

  constructor(private paisService: PaisService) { }

  public activarRegion( region: string ){
    if(region === this.regionActiva) return;
    
    this.regionActiva = region;

    this.buscarPaises(region);
  }

  public getClaseCss( region: string){
    return region === this.regionActiva ? 'btn-primary': 'btn-outline-primary';
  }

  public buscarPaises(region: string){
    this.paisService.buscarRegion(region)
      .subscribe( paises => this.paises = paises );
  }

  

}
