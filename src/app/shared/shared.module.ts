import { NgModule }     from '@angular/core';

import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { RouterModule }     from '@angular/router';
import { HttpModule }       from '@angular/http';

import { KeyUpComponent }       from './components/key-up.component';
import { SizerComponent }       from './components/sizer.component';

@NgModule({
    imports: [],
    declarations: [
        KeyUpComponent,
        SizerComponent,
    ],
    exports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        HttpModule,
        KeyUpComponent,        
        SizerComponent,
    ],
})
export class SharedModule { }