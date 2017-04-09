import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './component/app.component';
import { CrisisListComponent }     from './modules/crisis/components/list/crisis-list.component';
import { HeroListComponent }     from './modules/hero/components/list/hero-list.component';


@NgModule({
  declarations: [
    AppComponent,    
    CrisisListComponent,
    HeroListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
