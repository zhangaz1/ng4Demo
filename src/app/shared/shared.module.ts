import { NgModule }     from '@angular/core';

import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { RouterModule }     from '@angular/router';
import { HttpModule }       from '@angular/http';

import { KeyUpComponent }       from './components/key-up.component';
import { SizerComponent }       from './components/sizer.component';

import { HighlightDirective }   from './highlight.directive';

@NgModule({
    imports: [],
    declarations: [
        KeyUpComponent,
        SizerComponent,
        HighlightDirective,
    ],
    exports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        HttpModule,
        KeyUpComponent,        
        SizerComponent,
        HighlightDirective,
    ],
})
export class SharedModule { }