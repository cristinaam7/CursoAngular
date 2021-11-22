import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMsqDirective } from './directives/error-msq.directive';
import { OkMsgDirective } from './directives/ok-msg.directive';



@NgModule({
  declarations: [
    ErrorMsqDirective,
    OkMsgDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorMsqDirective,
    OkMsgDirective
  ]
})
export class SharedModule { }
