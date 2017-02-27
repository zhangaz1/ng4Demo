import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UserService }          from './user.service';
import { AppComponent }         from './app.component';
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
    BrowserModule,
    ContactModule,
    AppRoutingModule,
  ],
  providers: [
    UserService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
