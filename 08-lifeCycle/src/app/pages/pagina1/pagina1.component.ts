import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component 
  implements OnInit, OnChanges, DoCheck, AfterContentChecked,
            AfterContentInit, AfterViewInit, AfterViewChecked,
            OnDestroy{

  nombre: string = "";
  segundos: number = 0;
  timerSubscription!: Subscription;

  constructor() { 
    console.log("constructor");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges");
  }

  ngDoCheck(): void {
    console.log("ngDoCheck");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
    this.timerSubscription.unsubscribe();
  }

  ngOnInit(): void {
    console.log("ngOnInit");
    this.timerSubscription = interval(1000).subscribe( i => {
      console.log(i);
      this.segundos = i;
    })
  }

  public guardar(){
    
  }

}
