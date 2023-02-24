import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgExplainModule} from "../../projects/ng-explain/src/lib/ng-explain.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgExplainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
