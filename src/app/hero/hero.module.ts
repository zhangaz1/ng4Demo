import { NgModule }     from '@angular/core';

import { SharedModule }     from './../shared/shared.module';

import { HeroesComponent }      from './heroes.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroSearchComponent }  from './hero-search.component';
import { HeroFormComponent }    from './hero-form.component';


@NgModule({
    imports: [
        SharedModule,
    ],
    declarations: [
        HeroesComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroSearchComponent,
        HeroFormComponent,
    ],
    exports: [],
})
export class HeroModule { }