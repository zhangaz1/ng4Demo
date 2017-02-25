import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import './rxjs-extensions';

import { InMemoryWebApiModule }   from 'angular-in-memory-web-api';
import { InMemoryDataService }    from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { Logger }             from './logger.service';
import { UserService }        from './user.service';
import { EventBetterLogger }  from './event-better-logger.service';
import { HeroService }        from './hero.service';
import { heroServiceProvider }  from './hero.service.provider';

import { AppComponent }         from './app.component';
import { HeroesComponent }      from './heroes.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroSearchComponent }  from './hero-search.component';
import { KeyUpComponent }       from './key-up.component';
import { HeroFormComponent }    from './hero-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    KeyUpComponent,
    HeroFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
  ],
  providers: [
    UserService,
    EventBetterLogger,
    // { provide: Logger, useClass: EventBetterLogger }, // 两个eventBetterLogger实例
    { provide: Logger, useExisting: EventBetterLogger }, // use 同一个EventBetterLogger实例
    // { 
    //   provide: Logger, 
    //   useValue: {
    //     logs: ['Silent logger says "Shhhhh!". Provided via "useValue"'],
    //     log: () => {},
    //   } 
    // },
    // HeroService,
    heroServiceProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }