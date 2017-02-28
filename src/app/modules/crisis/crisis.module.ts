import { NgModule } from '@angular/core';

import { SharedModule }     from './../../shared/shared.module';

import { CrisisService }     from './crisis.service';

import { CrisisRoutingModule } from './crisis-routing.module';
import { CrisisListComponent } from './crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail.component';

@NgModule({
    imports: [
        SharedModule,
        CrisisRoutingModule,
    ],
    exports: [],
    declarations: [
        CrisisListComponent,
        CrisisDetailComponent,
    ],
    providers: [
        CrisisService,
    ],
})
export class CrisisModule { }
