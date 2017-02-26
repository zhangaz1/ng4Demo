import { NgModule }       from '@angular/core';

import './rxjs-extensions';

import { AppRoutingModule } from './app-routing.module';

import { appConfigProvider }  from './app-config';

import { CoreModule }   from './core/core.module';

import { HeroService }        from './modules/hero/hero.service';
import { heroServiceProvider }  from './modules/hero/hero.service.provider';

import { HeroModule }   from './modules/hero/hero.module';

import { AppComponent }         from './component/app.component';
import { KeyUpComponent }       from './key-up.component';
import { SizerComponent }       from './sizer.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyUpComponent,
    SizerComponent,
  ],
  imports: [
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