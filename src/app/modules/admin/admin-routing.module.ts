import { NgModule }         from '@angular/core';

import { CoreModule }     from './../../core/core.module';

import { AdminComponent }     from './components/admin/admin.component';

import { ManageCrisesComponent }     from './components/crises/manage-crises.component';
import { ManageHeroesComponent }     from './components/heroes/manage-heroes.component';

@NgModule({
    declarations: [
        AdminComponent,
        ManageCrisesComponent,
        ManageHeroesComponent,
    ],
    imports: [
        CoreModule,
    ],
})
export class AdminRoutingModule { }