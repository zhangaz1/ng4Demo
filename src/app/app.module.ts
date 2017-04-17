import { NgModule }       from '@angular/core';

import { CoreModule }   from './core/core.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './component/app/app.component';


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
export class AppModule { }
