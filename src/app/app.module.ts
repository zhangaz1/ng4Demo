import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import './rxjs-extensions';

import { InMemoryWebApiModule }   from 'angular-in-memory-web-api';
import { InMemoryDataService }    from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { appConfigProvider }  from './app-config';

import { CoreModule }   from './core/core.module';

import { HeroService }        from './hero/hero.service';
import { heroServiceProvider }  from './hero/hero.service.provider';

import { HeroModule }   from './hero/hero.module';

import { AppComponent }         from './app.component';
import { KeyUpComponent }       from './key-up.component';
import { SizerComponent }       from './sizer.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyUpComponent,
    SizerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    CoreModule,
    HeroModule,
  ],
  providers: [
    // appConfigProvider,

    heroServiceProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }