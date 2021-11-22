import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, Validator } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  public miForm: FormGroup = this.fb.group({
    nombre: [ ,[Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array( 
      [ ['Pam'], ['Tom Raider'] ] , Validators.required)
  });

  public nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  get favoritosArr(){
    return this.miForm.get('favoritos') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  public validarCampo(campo: string){
    return this.miForm.controls[campo].errors &&
            this.miForm.controls[campo].touched;
  }

  public agregarFavorito(){
    if(this.nuevoFavorito.invalid){ return;}

    this.favoritosArr.push(
      this.fb.control(this.nuevoFavorito.value, Validators.required)
    );

    this.nuevoFavorito.reset();
  }

  public guardar(){
    
    if(this.miForm.invalid){
      this.miForm.markAllAsTouched();
      return;
    }
    
    console.log(this.miForm.value);

    this.miForm.reset();
  }

  public eliminarFavorito(index: number){
    this.favoritosArr.removeAt(index);
  }

}
