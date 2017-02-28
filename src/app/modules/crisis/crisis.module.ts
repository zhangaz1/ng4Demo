import { NgModule } from '@angular/core';

import { SharedModule }     from './../../shared/shared.module';

import { CrisisRoutingModule } from './crisis-routing.module';
import { CrisisListComponent } from './crisis-list.component';

@NgModule({
    imports: [
        SharedModule,
        CrisisRoutingModule,
    ],
    exports: [],
    declarations: [CrisisListComponent],
    providers: [],
})
export class CrisisModule { }
