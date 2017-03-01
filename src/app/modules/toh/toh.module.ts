import { NgModule }     from '@angular/core';

import { SharedModule }     from './../../shared/shared.module';

import { TohRoutingModule }     from './toh-routing.module';

import { TohService }     from './toh.service';

import { TohListComponent }     from './components/list/toh-list.component';

@NgModule({
    declarations: [
        TohListComponent,
    ],
    imports: [
        SharedModule,
        TohRoutingModule,        
    ],
    exports: [],
    providers: [TohService],
})
export class TohModule { }