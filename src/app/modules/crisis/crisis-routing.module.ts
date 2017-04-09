import { NgModule }                 from '@angular/core';
import {
    Routes, 
    RouterModule
}     from '@angular/router';

import { CrisisCenterComponent }     from './components/center/crisis-center.component';
import { CrisisListComponent }       from './components/list/crisis-list.component';


const appRoutes: Routes = [{
                            path: 'crisis-center',
                            component: CrisisCenterComponent,
                        }, {
                            path: 'crisis-list',
                            component: CrisisListComponent,
                        }];

@NgModule({
    declarations: [
        CrisisCenterComponent,
        CrisisListComponent,
    ],
    imports: [       
        RouterModule.forChild(appRoutes),
    ],
})
export class CrisisRoutingModule { }