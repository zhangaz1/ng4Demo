import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent }      from './modules/hero/list/hero-list.component';
import { DashboardComponent }   from './modules/hero/dashboard/dashboard.component';
import { HeroDetailComponent }  from './modules/hero/detail/hero-detail.component';
import { HeroFormComponent }    from './modules/hero/form/hero-form.component';
import { KeyUpComponent }       from './key-up.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
    }, {
        path: 'heroes',
        component: HeroesComponent,
    }, {
        path: 'dashboard',
        component: DashboardComponent,
    }, {
        path: 'detail/:id',
        component: HeroDetailComponent,
    }, {
        path: 'keyup',
        component: KeyUpComponent,
    }, {
        path: 'hero-form',
        component: HeroFormComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}