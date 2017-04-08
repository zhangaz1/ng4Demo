import { NgModule }                 from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';

import { HeroListComponent }     from './modules/hero/components/list/hero-list.component';


const appRoutes: Routes = [{
    path: 'hero-list',
    component: HeroListComponent,
}, {
    path: '**',
    component: PageNotFoundComponent,
}];

@NgModule({
    declarations: [
        PageNotFoundComponent,
    ],
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule { }