import { NgModule }                 from '@angular/core';
import {
    Routes, 
    RouterModule
}     from '@angular/router';

import { CrisisCenterComponent }     from './components/center/crisis-center.component';
import { CrisisHomeComponent }       from './components/home/crisis-home.component';
import { CrisisListComponent }       from './components/list/crisis-list.component';
import { CrisisDetailComponent }       from './components/detail/crisis-detail.component';


const appRoutes: Routes = [{
                            path: 'crisis-center',
                            component: CrisisCenterComponent,
                            children: [{ 
                                path: '',
                                component: CrisisListComponent,
                                children: [{
                                    path: '',
                                    component: CrisisHomeComponent,
                                }, {
                                    path: ':id',
                                    component: CrisisDetailComponent,
                                }],
                            }, ],
                        }, ];

@NgModule({
    declarations: [
        CrisisCenterComponent,
        CrisisHomeComponent,
        CrisisListComponent,
        CrisisDetailComponent,
    ],
    imports: [       
        RouterModule.forChild(appRoutes),
    ],
})
export class CrisisRoutingModule { }