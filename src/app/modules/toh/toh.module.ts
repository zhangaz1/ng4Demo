import { NgModule }        from '@angular/core';
import { JsonpModule }     from '@angular/http';

import { SharedModule }     from './../../shared/shared.module';

import { TohRoutingModule }     from './toh-routing.module';

import { FlyingPipe }           from './components/flying/flying.pipe';
import { FetchPipe }           from './components/fetch/fetch.pipe';

import { TohListComponent }             from './components/list/toh-list.component';
import { TohListPromiseComponent }      from './components/list/toh-list.component.promise';
import { WikiComponent }                from './components/wiki/wiki.component';
import { FlyingComponent }              from './components/flying/flying.component';
import { AsyncComponent }               from './components/async/async.component';
import { FetchComponent }               from './components/fetch/fetch.component';

@NgModule({
    declarations: [
        FlyingPipe,
        FetchPipe,
        TohListComponent,
        TohListPromiseComponent,
        WikiComponent,
        FlyingComponent,
        AsyncComponent,
        FetchComponent,
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