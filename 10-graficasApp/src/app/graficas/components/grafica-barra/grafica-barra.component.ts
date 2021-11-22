import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @Input() barChartLabels: Label[] = [];
  @Input() barChartType: ChartType = 'bar';
  @Input() barChartLegend = true;
  @Input() barChartData: ChartDataSets[] = [];

  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  constructor() { }

  ngOnInit(): void {
    //Aqui modificaria las propiedades que es cuando se inicia el component
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData[0].data = [
      Math.round(Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100), ];

      this.barChartData[1].data = [
        Math.round(Math.random() * 100),
        (Math.random() * 100),
        (Math.random() * 100),
        (Math.random() * 100),
        (Math.random() * 100),
        (Math.random() * 100),
        (Math.random() * 100), ];
  }

}
