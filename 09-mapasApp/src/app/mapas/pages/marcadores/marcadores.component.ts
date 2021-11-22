import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface MarcadorColor {
  color: string;
  marker?: mapboxgl.Marker;
  centro?: [number, number];
}

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [`
    .mapa-container {
      height: 100%;
      width: 100%;
    }
    
    .list-group {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 99;
    }
    
    li {
      cursor: pointer;
    }`
  ]
})
export class MarcadoresComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa!: ElementRef;
  public mapa!: mapboxgl.Map;
  public zoomLevel: number = 15;
  public center: [number, number] = [-0.39893906376559063, 42.14162614300221];

  public marcadores: MarcadorColor[] = [];

  constructor() { }

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel,
    });

    this.leerLocalStorage();
  }

  public irMarcador(marcador: mapboxgl.Marker){ 
    this.mapa.flyTo({
      center: marcador.getLngLat()
    })
  }

  public agregarMarcador(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    
    const marker = {
      color: color,
      marker: new mapboxgl.Marker({
                draggable: true,
                color: color
              })
              .setLngLat(this.center)
              .addTo( this.mapa )
    }

    this.marcadores.push(marker);

    this.guardarMarcadores();

    marker.marker.on('dragend', () => {
      this.guardarMarcadores();
    })
  }

  public borrarMarcador(index: number){
    this.marcadores[index].marker?.remove();
    this.marcadores.splice(index, 1);
    this.guardarMarcadores();
  }

  public guardarMarcadores(){

    const lngLatArr: MarcadorColor[] = [];

    this.marcadores.forEach( m => {
      const color = m.color;
      const {lng, lat} = m.marker!.getLngLat();

      lngLatArr.push({
        color: color,
        centro: [lng, lat]
      })
    })

    localStorage.setItem('marcadores', JSON.stringify(lngLatArr));
  }

  public leerLocalStorage(){
    if(!localStorage.getItem('marcadores')){
      return;
    }

    const lngLatArr: MarcadorColor[] = JSON.parse(localStorage.getItem('marcadores')!);

    lngLatArr.forEach( m => {
      const marker = {
        color: m.color,
        marker: new mapboxgl.Marker({
                  draggable: true,
                  color: m.color
                })
                .setLngLat(m.centro!)
                .addTo( this.mapa )
      }

      this.marcadores.push(marker);

      marker.marker.on('dragend', () => {
        this.guardarMarcadores();
      })
      
    });
  }
 
}
