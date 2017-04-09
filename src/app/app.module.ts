import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';

import './rxjs-extensions';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './component/app.component';


@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
