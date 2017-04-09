import { NgModule }                 from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

import { CoreModule }     from './../../core/core.module';

import { HeroListComponent }     from './components/list/hero-list.component';

const appRoutes: Routes = [{
                            path: 'hero-list',
                            component: HeroListComponent,
                        }];

@NgModule({
    declarations: [
        HeroListComponent,
    ],
    imports: [
        CoreModule,
        RouterModule.forChild(appRoutes),
    ],
})
export class HeroRoutingModule { }