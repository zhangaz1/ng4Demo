import { NgModule }                 from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

import { CoreModule }     from './../../core/core.module';

import { HeroListComponent }     from './components/list/hero-list.component';
import { HeroDetailComponent }     from './components/detail/hero-detail.component';

const appRoutes: Routes = [{
                            path: 'hero-list',
                            component: HeroListComponent,
                        }, {
                            path: 'hero/:id',
                            component: HeroDetailComponent,
                        }, ];

@NgModule({
    declarations: [
        HeroListComponent,
        HeroDetailComponent,
    ],
    imports: [
        CoreModule,
        RouterModule.forChild(appRoutes),
    ],
})
export class HeroRoutingModule { }