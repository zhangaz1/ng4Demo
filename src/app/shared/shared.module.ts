import { NgModule }     from '@angular/core';

import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
    ],
    declarations: [],
    exports: [
        BrowserModule,
        FormsModule,
        RouterModule,
    ],
})
export class SharedModule { }