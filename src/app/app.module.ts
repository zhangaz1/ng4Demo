import { NgModule }       from '@angular/core';
import { Router }     from '@angular/router';

import { CoreModule }   from './core/core.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './components/app/app.component';


@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    CoreModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { 
  constructor(router: Router) {
    console.log('Routes:', JSON.stringify(router.config, undefined, 2));
  }
}
