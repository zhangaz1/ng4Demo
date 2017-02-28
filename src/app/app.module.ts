import { NgModule }       from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';

import './rxjs-extensions';

import { AppRoutingModule }   from './app-routing.module';
import { appConfigProvider }  from './app-config';

import { CoreModule }     from './core/core.module';
import { SharedModule }   from './shared/shared.module';

import { HeroModule }   from './modules/hero/hero.module';
import { AppComponent }         from './component/app.component';

import { ContactModule }   from './modules/contact/contact.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot({userName: 'Miss Marple'}),
    SharedModule,
    ContactModule,
    HeroModule,
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }