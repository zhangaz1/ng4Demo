import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UserService }          from './user.service';
import { AppComponent }         from './app.component';
import { HighlightDirective }   from './highlight.directive';
import { TitleComponent }       from './title.component';
import { ContactComponent }     from './contact/contact.component';
import { AwesomePipe }          from './contact/awesome.pipe';
import { ContactService }       from './contact/contact.service';
import { HighlightDirective as ContactHighlightDirective } from './contact/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    TitleComponent,
    ContactComponent,
    AwesomePipe,
    ContactHighlightDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    UserService,
    ContactService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
