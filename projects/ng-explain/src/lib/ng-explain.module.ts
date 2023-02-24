import { NgModule } from '@angular/core';
import { NgExplainComponent } from './ng-explain.component';
import {NgIf, NgForOf, NgStyle} from "@angular/common";


@NgModule({
  declarations: [
    NgExplainComponent
  ],
    imports: [
        NgIf,
        NgForOf,
        NgStyle
    ],
  exports: [
    NgExplainComponent
  ]
})
export class NgExplainModule { }
