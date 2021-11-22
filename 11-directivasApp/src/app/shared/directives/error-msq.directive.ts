import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsqDirective implements OnInit, OnChanges{

  private elementRef: ElementRef<HTMLElement>;

  private _color: string = 'red';
  private _msg: string = 'Este campo es requerido';

  //Este setter solo se ejecuta si cambia el color
  @Input() set color(valor: string){
    this._color = valor; //Esto lo hago por si necesitara acceder al color
    this.setColor();
  }

  //Este setter solo se ejecuta si cambiar el mensaje
  @Input() set msg(valor: string){
    this._msg = valor;
    this.setMsg();
  }

  @Input() set valido(valor: boolean){
    if (valor) {
      this.elementRef.nativeElement.classList.add('hidden');
    }
    else{
      this.elementRef.nativeElement.classList.remove('hidden');
    }
  }

  constructor(private el: ElementRef<HTMLElement>) { 
    this.elementRef = el;
  }

  ngOnInit(): void {
    this.setColor();
    this.setMsg();

    this.setEstilo();
  }

  ngOnChanges(changes: SimpleChanges): void {
    /*if(changes.msg){
      this.elementRef.nativeElement.innerText = changes.msg.currentValue;
    }

    if(changes.color){
      this.elementRef.nativeElement.style.color = changes.color.currentValue;
    }

    console.log(changes);*/
    
  }

  public setEstilo(): void{
    this.elementRef.nativeElement.classList.add("form-text");
  }

  public setColor(): void{
    this.elementRef.nativeElement.style.color = this._color;
  }

  public setMsg(): void{
    this.elementRef.nativeElement.innerText = this._msg;
  }

}
