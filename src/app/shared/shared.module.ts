import { NgModule }     from '@angular/core';

import { CommonModule }     from '@angular/common';
import { FormsModule }      from '@angular/forms';
import { RouterModule }     from '@angular/router';
import { HttpModule }       from '@angular/http';

import { KeyUpComponent }       from './components/key-up.component';
import { SizerComponent }       from './components/sizer.component';

import { AwesomePipe }          from './awesome.pipe';
import { HighlightDirective }   from './highlight.directive';

@NgModule({
    imports: [],
    declarations: [
        KeyUpComponent,
        SizerComponent,
        AwesomePipe,
        HighlightDirective,
    ],
    exports: [
        CommonModule,
        FormsModule,
        RouterModule,
        HttpModule,
        KeyUpComponent,        
        SizerComponent,
        AwesomePipe,
        HighlightDirective,
    ],
})
export class SharedModule { }