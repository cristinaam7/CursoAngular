import { ElementRef, OnDestroy } from '@angular/core';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [`
    .mapa-container {
      height: 100%;
      width: 100%;
    }

    .row {
      background-color: white;
      bottom: 50px;
      left: 50px;
      padding: 10px;
      border-radius: 5px;
      position: fixed;
      z-index: 999;
      width: 400px;
    }`
  ]
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {

  @ViewChild('mapa') divMapa!: ElementRef;
  public mapa!: mapboxgl.Map;
  public zoomLevel: number = 15;
  public center: [number, number] = [-0.39893906376559063, 42.14162614300221];

  constructor() { }

  ngOnDestroy(): void {
    this.mapa.off('zoom', () => {});
    this.mapa.off('zoomend', () => {});
    this.mapa.off('move', () => {});
  }

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel,
    });

    this.mapa.on('zoom', () => {
      this.zoomLevel = this.mapa.getZoom();
    });

    this.mapa.on('zoomend', () => {
      if(this.mapa.getZoom() > 18){
        this.mapa.zoomTo(18);
      }
    });

    this.mapa.on('move', (event) => {
      this.center = [event.target.getCenter().lng, event.target.getCenter().lat];
    });
  }

  public zoomIn(){
    this.mapa.zoomIn();
  }

  public zoomOut(){
    this.mapa.zoomOut();
  }

  public zoomCambio(zoom: string){
    this.mapa.zoomTo(Number(zoom));
  }

}
