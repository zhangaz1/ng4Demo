import { NgModule }                 from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';

import { HeroModule }   from './modules/hero/hero.module';
import { CrisisModule }     from './modules/crisis/crisis.module';

import { HeroListComponent }     from './modules/hero/components/list/hero-list.component';
import { CrisisListComponent }     from './modules/crisis/components/list/crisis-list.component';


const appRoutes: Routes = [{
                            path: 'crisis-list',
                            component: CrisisListComponent,
                        }, {
                            path: '',
                            redirectTo: '/hero-list',
                            pathMatch: 'full',
                        }, {
                            path: '**',
                            component: PageNotFoundComponent,
                        }];

@NgModule({
    declarations: [
        PageNotFoundComponent,
    ],
    imports: [
        HeroModule,
        CrisisModule,        
        RouterModule.forRoot(appRoutes),
    ],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule { }