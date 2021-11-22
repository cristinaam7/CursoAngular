import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Paises, PaisesSmall } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';
import { switchMap, tap } from 'rxjs/operators'

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent implements OnInit {

  public miForm: FormGroup = this.fb.group({
    region: [, Validators.required],
    pais: [, Validators.required],
    frontera: [ , Validators.required]
  })

  public regiones: string[] = [];
  public paises: PaisesSmall[] = [];
  public fronteras: PaisesSmall[] = [];


  public cargando: boolean = false;

  constructor(private fb: FormBuilder,
              private paisesService: PaisesService) { }

  ngOnInit(): void {
    this.regiones = this.paisesService.regiones;

    this.miForm.get('region')?.valueChanges
    .pipe(
      tap( () => {
        this.miForm.get('pais')?.reset('');
        this.cargando = true;
      }),
      switchMap( region => this.paisesService.getPaisesPorRegion(region))
    )
    .subscribe( paises => { 
        this.paises = paises;
        this.cargando = false;
       });

    this.miForm.get('pais')?.valueChanges
      .pipe(
        tap( paisCode => {
          this.miForm.get('frontera')?.reset('');
          this.cargando = true;
        }),
        switchMap( paisCode => this.paisesService.getPaisesPorCodigo(paisCode)),
        switchMap( pais => this.paisesService.getPaisesPorCodigos(pais? pais[0].borders : []))
      )
      .subscribe( fronteras => { 
        this.fronteras = fronteras;
        this.cargando = false;
      })
  }

  public guardar(){

  }

}
