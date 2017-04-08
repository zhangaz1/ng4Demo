import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { HeroModule }   from './modules/hero/hero.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './component/app.component';


@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HeroModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
