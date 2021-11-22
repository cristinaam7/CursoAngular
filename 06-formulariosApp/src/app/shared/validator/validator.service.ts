import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public nombrePattern: string = '([a-zA-z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  public noPuedeSerStrider(control: FormControl): ValidationErrors | null {
    const valor = control.value?.trim().toLowerCase();
    if(valor === 'strider'){
      return {
        noStrider: true
      }
    }
    return null; //Elemento validado OK
  }

  public camposIguales(campo1: string, campo2:string){
    return ( control: AbstractControl): ValidationErrors | null => {
      
      if( control.get(campo1)?.value !== control.get(campo2)?.value){
        control.get(campo2)?.setErrors({ noIguales: true});
        return { noIguales: true};
      }
      
      control.get(campo2)?.setErrors(null);
      return null;
    }
  }
}
