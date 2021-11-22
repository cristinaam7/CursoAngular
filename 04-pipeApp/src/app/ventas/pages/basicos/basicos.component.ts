import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {

  public nombreLower: string = 'cristina';
  public nombreUpper: string = 'CRISTINA';
  public nombreCompleto: string = 'cRistInA aGuIlAr';

  public fecha: Date = new Date();

}
