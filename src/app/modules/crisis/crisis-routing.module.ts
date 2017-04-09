import { NgModule }                 from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

import { CrisisListComponent }     from './components/list/crisis-list.component';


const appRoutes: Routes = [{
                            path: 'crisis-list',
                            component: CrisisListComponent,
                        }];

@NgModule({
    imports: [       
        RouterModule.forRoot(appRoutes),
    ],
})
export class CrisisRoutingModule { }