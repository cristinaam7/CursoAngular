import { Component, OnInit } from '@angular/core';

interface MenuItem {
  ruta: string;
  nombre: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
    li {
      cursor: pointer;
    }`
  ]
})
export class MenuComponent implements OnInit {

  public menuItem: MenuItem[] = [
    {
      ruta: '/mapas/fullScream',
      nombre: 'FullScreem'
    },
    {
      ruta: '/mapas/zoom-range',
      nombre: 'Zoom Range'
    },
    {
      ruta: './mapas/marcadores',
      nombre: 'Marcadores'
    },
    {
      ruta: './mapas/propiedades',
      nombre: 'Propiedades'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
