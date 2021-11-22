import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../interfaces/shares.interface';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [`
    li {
      cursor: pointer;
    }`
  ]
})
export class SideMenuComponent implements OnInit {

  public templateMenu: MenuItem[] = [
    {
      texto: 'Básicos',
      ruta: './template/basicos'
    },
    {
      texto: 'Dinámicos',
      ruta: './template/dinamicos'
    },
    {
      texto: 'Switches',
      ruta: './template/switches'
    }
  ];

  public reactiveMenu: MenuItem[] = [
    {
      texto: 'Básicos',
      ruta: './reactive/basicos'
    },
    {
      texto: 'Dinámicos',
      ruta: './reactive/dinamicos'
    },
    {
      texto: 'Switches',
      ruta: './reactive/switches'
    }
  ];

    public authMenu: MenuItem[] = [
    {
      texto: 'Login',
      ruta: './auth/login'
    },
    {
      texto: 'Registro',
      ruta: './auth/registro'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
