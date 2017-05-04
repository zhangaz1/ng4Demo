import { NgModule }                 from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

// import { CoreModule }     from './../../core/core.module';
import { CommonModule }     from '@angular/common';
import { FormsModule }      from '@angular/forms';

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
        // CoreModule,
        CommonModule,    
        FormsModule,
        RouterModule.forChild(appRoutes),
    ],
})
export class HeroRoutingModule { }