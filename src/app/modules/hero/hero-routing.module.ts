import { NgModule }                 from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

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
        RouterModule.forChild(appRoutes),
    ],
})
export class HeroRoutingModule { }