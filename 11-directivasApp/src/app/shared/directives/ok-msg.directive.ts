import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[okMsg]'
})
export class OkMsgDirective {

  @Input() set okMsg(condicion: boolean){
    if(condicion){
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
    else{
      this.viewContainer.clear();
    }
  }

  constructor( private templateRef: TemplateRef<HTMLElement>,
        private viewContainer: ViewContainerRef) { }

}
