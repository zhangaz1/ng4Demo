import { NgModule }     from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

import { KeyUpComponent }       from './shared/components/key-up.component';
import { ContactComponent }     from './modules/contact/contact.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {
        path: 'keyup',
        component: KeyUpComponent,
    },
    { path: 'contact', component: ContactComponent },    
    // { path: 'contact', loadChildren: 'app/modules/contact/contact.module#ContactModule'},
    { path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule' },
    // { path: 'heroes', loadChildren: 'app/modules/hero/hero.module#HeroModule' },
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