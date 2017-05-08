import { NgModule }                 from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

import { ShareModule }      from './../../share/share.module';

import { HeroListComponent }     from './components/list/hero-list.component';
import { HeroDetailComponent }     from './components/detail/hero-detail.component';

const appRoutes: Routes = [{
                            path: '',
                            redirectTo: 'list',
                            pathMatch: 'full',
                        }, {
                            path: 'list',
                            component: HeroListComponent,
                        }, {
                            path: ':id',
                            component: HeroDetailComponent,
                        }, ];

@NgModule({
    declarations: [
        HeroListComponent,
        HeroDetailComponent,
    ],
    imports: [
        ShareModule,
        RouterModule.forChild(appRoutes),
    ],
})
export class HeroRoutingModule { }