import { NgModule }     from '@angular/core';

import { SharedModule }     from './../../shared/shared.module';

import { TohRoutingModule }     from './toh-routing.module';

import { TohListComponent }     from './components/list/toh-list.component';
import { TohListPromiseComponent }     from './components/list/toh-list.component.promise';

@NgModule({
    declarations: [
        TohListComponent,
        TohListPromiseComponent,
    ],
    imports: [
        SharedModule,
        TohRoutingModule,        
    ],
    exports: [],
    providers: [],
})
export class TohModule { }