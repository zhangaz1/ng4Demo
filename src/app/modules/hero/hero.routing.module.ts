import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent }      from './list/hero-list.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './detail/hero-detail.component';
import { HeroFormComponent }    from './form/hero-form.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
    }, {
        path: 'heroes',
        component: HeroesComponent,
        data: {
            title: 'Heroes List',
        },
    }, {
        path: 'dashboard',
        component: DashboardComponent,
    }, {
        path: 'detail/:id',
        component: HeroDetailComponent,
    }, {
        path: 'hero-form',
        component: HeroFormComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class HeroRoutingModule {}