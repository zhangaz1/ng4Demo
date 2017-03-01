import { NgModule }     from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

import { TohListComponent }     from './components/list/toh-list.component';

const routes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full', },
    { path: 'list', component: TohListComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TohRoutingModule { }