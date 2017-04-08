import { NgModule }     from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

import { PageNotFoundComponent }    from './core/components/page-not-found.component';
import { KeyUpComponent }       from './shared/components/key-up.component';
import { ContactComponent }     from './modules/contact/contact.component';

export const routes: Routes = [
    {
        path: 'keyup',
        component: KeyUpComponent,
    },
    { path: 'contact', component: ContactComponent },    
    // { path: 'contact', loadChildren: 'app/modules/contact/contact.module#ContactModule'},
    { path: 'crisis', loadChildren: 'app/modules/crisis/crisis.module#CrisisModule' },
    { path: 'toh', loadChildren: 'app/modules/toh/toh.module#TohModule' },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    // {
    //     path: '**',
    //     component: PageNotFoundComponent,
    // },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule { }