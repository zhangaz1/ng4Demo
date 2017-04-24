import { NgModule }         from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

import { CoreModule }     from './../../core/core.module';

import { AuthService }         from './../../common/auth.service';
import { AuthGuardService }     from './../../common/auth-guard.service';

import { AdminComponent }     from './components/admin/admin.component';

import { AdminDashboardComponent }     from './components/dashboard/admin-dashboard.component';
import { ManageCrisesComponent }     from './components/crises/manage-crises.component';
import { ManageHeroesComponent }     from './components/heroes/manage-heroes.component';

const adminRoutes: Routes = [{
    path: 'admin',
    component: AdminComponent,
    canActivate: [
        AuthGuardService,
    ],
    children: [{
        path: '',
        children: [{
            path: 'crises',
            component: ManageCrisesComponent,
        }, {
            path: 'heroes',
            component: ManageHeroesComponent,
        }, {
            path: '',
            component: AdminDashboardComponent,
        }, ],
    }],
}];

@NgModule({
    declarations: [
        AdminComponent,
        AdminDashboardComponent,
        ManageCrisesComponent,
        ManageHeroesComponent,
    ],
    imports: [
        CoreModule,
        RouterModule.forChild(adminRoutes),
    ],
    providers: [
        AuthService,
        AuthGuardService,
    ],
})
export class AdminRoutingModule { }