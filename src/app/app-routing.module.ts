import { NgModule }     from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

import { KeyUpComponent }       from './shared/components/key-up.component';

export const routes: Routes = [
    { path: '', redirectTo: 'contact', pathMatch: 'full' },
    {
        path: 'keyup',
        component: KeyUpComponent,
    },
    // { path: 'contact'},
    { path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule' },
    { path: 'heroes', loadChildren: 'app/hero/hero.module#HeroModule' },
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