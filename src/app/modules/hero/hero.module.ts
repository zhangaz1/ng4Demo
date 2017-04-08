import { NgModule }     from '@angular/core';
import { RouterModule }     from '@angular/router';

import { HeroListComponent }     from './components/list/hero-list.component';

@NgModule({
    declarations: [
        HeroListComponent,
    ],
    imports: [
        RouterModule,
    ],
})
export class HeroModule { }