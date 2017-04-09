import { NgModule }                 from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

import { CrisisListComponent }     from './components/list/crisis-list.component';


const appRoutes: Routes = [{
                            path: 'crisis-list',
                            component: CrisisListComponent,
                        }];

@NgModule({
    declarations: [
        CrisisListComponent,
    ],
    imports: [       
        RouterModule.forChild(appRoutes),
    ],
})
export class CrisisRoutingModule { }