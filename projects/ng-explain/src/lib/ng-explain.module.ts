import { NgModule } from '@angular/core';
import { NgExplainComponent } from './ng-explain.component';
import {NgIf, NgForOf} from "@angular/common";


@NgModule({
  declarations: [
    NgExplainComponent
  ],
  imports: [
    NgIf,
    NgForOf
  ],
  exports: [
    NgExplainComponent
  ]
})
export class NgExplainModule { }
