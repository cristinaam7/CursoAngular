import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit{

  public miForm: FormGroup = this.fb.group({
    genero: [, Validators.required],
    notificaciones: [, Validators.required],
    condiciones: [,Validators.requiredTrue]
  });

  persona = {
    genero: 'M',
    notificaciones: true
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    //this.miForm.setValue(this.persona);
    //Me permite setearlo aunque no coincidan las propiedades
    this.miForm.reset({...this.persona, condiciones: false});

    /*this.miForm.valueChanges
      .subscribe( form => {
        delete form.condiciones;
        this.persona = form;
      });*/

      this.miForm.valueChanges
      .subscribe( ({condiciones, ...rest}) => {
        this.persona = rest;
      });
  }

  public guardar(){
    const formValue = {...this.miForm.value};
    delete formValue.condiciones;
    this.persona = formValue;
  }

}
