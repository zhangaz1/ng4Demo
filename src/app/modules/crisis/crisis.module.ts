import { NgModule } from '@angular/core';

import { CrisisRoutingModule } from './crisis-routing.module';
import { CrisisListComponent } from './crisis-list.component';

@NgModule({
    imports: [
        CrisisRoutingModule,
    ],
    exports: [],
    declarations: [CrisisListComponent],
    providers: [],
})
export class CrisisModule { }
