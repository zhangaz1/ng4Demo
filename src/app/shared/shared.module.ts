import { NgModule }     from '@angular/core';

import { CommonModule }     from '@angular/common';
import { FormsModule }      from '@angular/forms';
import { RouterModule }     from '@angular/router';

import { KeyUpComponent }       from './components/key-up.component';
import { SizerComponent }       from './components/sizer.component';

import { AwesomePipe }          from './pipes/awesome.pipe';
import { ExponentialStrengthPipe }          from './pipes/exponential-strength.pipe';

import { HighlightDirective }   from './highlight.directive';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        KeyUpComponent,
        SizerComponent,
        AwesomePipe,
        ExponentialStrengthPipe,
        HighlightDirective,
    ],
    exports: [
        CommonModule,
        FormsModule,
        RouterModule,
        KeyUpComponent,        
        SizerComponent,
        AwesomePipe,
        ExponentialStrengthPipe,
        HighlightDirective,
    ],
})
export class SharedModule { }