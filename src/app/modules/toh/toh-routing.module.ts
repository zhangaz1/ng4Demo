import { NgModule }     from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

import { TohListComponent }             from './components/list/toh-list.component';
import { TohListPromiseComponent }      from './components/list/toh-list.component.promise';
import { WikiComponent }                from './components/wiki/wiki.component';

const routes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full', },
    { path: 'list', component: TohListComponent },
    { path: 'list-promise', component: TohListPromiseComponent},
    { path: 'wiki', component: WikiComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TohRoutingModule { }