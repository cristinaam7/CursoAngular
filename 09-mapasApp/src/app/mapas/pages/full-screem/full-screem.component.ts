import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-full-screem',
  templateUrl: './full-screem.component.html',
  styles: [`
    #mapa{
      height: 100%;
      width: 100%;
    }`
  ]
})
export class FullScreemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-0.39893906376559063, 42.14162614300221],
      zoom: 15
    });

  }

}
