import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  public miForm: FormGroup = this.fb.group({
    nombre: [, Validators.required]
  })

  public textoMsg = "Obligatorio";
  public color = "black";

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  public validarCampo(campo: string): boolean{
    return this.miForm.get(campo)?.invalid || false;
  }

  public cambiarNombre(){
    this.textoMsg = Math.random().toString();
  }

  public cambiarColor(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }

}
