import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit{

  /*public miForm: FormGroup = new FormGroup({
    'producto': new FormControl('aa'),
    'precio': new FormControl(100),
    'existencias': new FormControl(100)
  })*/

  public miForm: FormGroup = this.fb.group({
    producto: [, [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.required, Validators.min(0)]],
    existencias: [, [Validators.required, Validators.min(0)]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    /*this.miForm.setValue({
      producto: 'Pitito',
      precio: 1000,
      existencias: 1
    });*/

    this.miForm.reset({
      producto: 'Pitito',
      precio: 1000
    });
  }

  public validarCampo(campo :string){
    return this.miForm.controls[campo].errors &&
            this.miForm.controls[campo].touched;
  }

  public guardar(){
    if(this.miForm.invalid){
      this.miForm.markAllAsTouched();
      return;
    }

    console.log(this.miForm.value);

    this.miForm.reset();
  }

}
