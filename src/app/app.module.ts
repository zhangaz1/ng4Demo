import { NgModule }       from '@angular/core';

import './rxjs-extensions';

import { AppRoutingModule } from './app-routing.module';

import { appConfigProvider }  from './app-config';

import { CoreModule }   from './core/core.module';
import { SharedModule }   from './shared/shared.module';

import { HeroService }        from './modules/hero/hero.service';
import { heroServiceProvider }  from './modules/hero/hero.service.provider';

import { HeroModule }   from './modules/hero/hero.module';

import { AppComponent }         from './component/app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HeroModule,
  ],
  providers: [
    // appConfigProvider,

    heroServiceProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }