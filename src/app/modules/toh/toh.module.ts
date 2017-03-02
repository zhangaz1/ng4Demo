import { NgModule }        from '@angular/core';
import { JsonpModule }     from '@angular/http';

import { SharedModule }     from './../../shared/shared.module';

import { TohRoutingModule }     from './toh-routing.module';

import { TohListComponent }             from './components/list/toh-list.component';
import { TohListPromiseComponent }      from './components/list/toh-list.component.promise';
import { WikiComponent }                from './components/wiki/wiki.component';

@NgModule({
    declarations: [
        TohListComponent,
        TohListPromiseComponent,
        WikiComponent,
    ],
    imports: [
        JsonpModule,
        SharedModule,
        TohRoutingModule,        
    ],
    exports: [],
    providers: [],
})
export class TohModule { }