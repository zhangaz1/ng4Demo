import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent }      from './heroes.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroDetailComponent }  from './hero-detail.component';
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
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}