import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  public miForm: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.pattern(this.validatorService.nombrePattern)]],
    email: [, [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
    username: [, [Validators.required, this.validatorService.noPuedeSerStrider]],
    password: [, [Validators.required, Validators.minLength(6)]],
    password_confirm: [, Validators.required]
  }, {
    validators: [ this.validatorService.camposIguales('password', 'password_confirm')]
  })

  get emailErrorMsg(): string{
    const errors = this.miForm.controls['email'].errors;
    if(errors?.required){
      return 'El email es obligatorio';
    }
    else if(errors?.pattern){
      return 'El email no tiene un formato correcto';
    }
    else if(errors?.emailTomado){
      return 'El email ya existe';
    }

    return this.emailErrorMsg;
  }

  constructor(private fb: FormBuilder,
                private validatorService: ValidatorService,
                private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.miForm.reset({
      nombre: 'Cris A',
      email: 'cris@cris.es',
      username: 'cris',
      password: '123456',
      password_confirm: '123456'
    })
  }

  public validarCampo(campo: string){
    return this.miForm.controls[campo]?.invalid &&
            this.miForm.controls[campo]?.touched;
  }

  enviarForm(){
    this.miForm.markAllAsTouched();
  }

}
