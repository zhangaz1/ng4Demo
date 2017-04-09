import { NgModule }     from '@angular/core';

import { CrisisService }     from './services/crisis.service'

import { CrisisRoutingModule }     from './crisis-routing.module';

@NgModule({
    imports: [
        CrisisRoutingModule,
    ],
    providers: [
        CrisisService,
    ],
})
export class CrisisModule { }