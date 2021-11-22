import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;
  public initForm ={
    producto: 'AA',
    precio: 10,
    existencias: 10 
  }

  constructor() { }

  ngOnInit(): void {
  }

  public guardar(){

    if(this.validarNombre() || this.validarPrecio()){
      return;
    }

    console.log('Posteo correcto');

    this.miFormulario.resetForm({
      precio: 0,
      existencias: 0
    });
  }

  public validarNombre(): boolean{
    return this.miFormulario?.controls.producto?.invalid &&
            this.miFormulario?.controls.producto?.touched
  }

  public validarPrecio(): boolean{
    return this.miFormulario?.controls.precio?.value < 0 &&
            this.miFormulario?.controls.precio?.touched
  }

}
