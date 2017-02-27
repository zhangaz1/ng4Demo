import { NgModule }       from '@angular/core';

import './rxjs-extensions';

import { AppRoutingModule }   from './app-routing.module';
import { appConfigProvider }  from './app-config';

import { CoreModule }     from './core/core.module';
import { SharedModule }   from './shared/shared.module';

import { HeroModule }   from './modules/hero/hero.module';
import { UserService }          from './user.service';
import { AppComponent }         from './component/app.component';
import { HighlightDirective }   from './highlight.directive';
import { TitleComponent }       from './title.component';

import { ContactModule }   from './contact/contact.module';

import { AppRoutingModule }   from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    TitleComponent,
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    SharedModule,
    ContactModule,
    HeroModule,
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }