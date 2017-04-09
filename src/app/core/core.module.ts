import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule }    from '@angular/platform-browser';

import './rxjs-extensions';


@NgModule({
    exports: [
        BrowserModule,
        FormsModule,
    ],
})
export class CoreModule { }