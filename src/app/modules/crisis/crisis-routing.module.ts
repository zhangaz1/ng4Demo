import { NgModule }                 from '@angular/core';
import {
    Routes, 
    RouterModule
}     from '@angular/router';

import { ShareModule }      from './../../share/share.module';

import { CanDeactivateGuardService }     from './../../common/can-deactivate-guard.service';

import { CrisisService }     from './services/crisis.service';
import { CrisisDetailResolverService }     from './services/crisis-detail-resolver.service';

import { CrisisCenterComponent }     from './components/center/crisis-center.component';
import { CrisisHomeComponent }       from './components/home/crisis-home.component';
import { CrisisListComponent }       from './components/list/crisis-list.component';
import { CrisisDetailComponent }       from './components/detail/crisis-detail.component';


const appRoutes: Routes = [{
                            path: '',
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
                                    canDeactivate: [
                                        CanDeactivateGuardService,
                                    ],
                                    resolve: {
                                        crisis: CrisisDetailResolverService,
                                    },
                                }, ],
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
        ShareModule,
        RouterModule.forChild(appRoutes),
    ],
    providers: [
        CrisisService,
        CrisisDetailResolverService,
    ],
})
export class CrisisRoutingModule { }