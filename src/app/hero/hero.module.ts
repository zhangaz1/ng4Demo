import { NgModule }     from '@angular/core';

import { CoreModule }       from './../core/core.module';
import { SharedModule }     from './../shared/shared.module';

import { InMemoryWebApiModule }   from 'angular-in-memory-web-api';
import { InMemoryDataService }    from './../core/in-memory-data.service';

import { HeroesComponent }      from './list/hero-list.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './detail/hero-detail.component';
import { HeroSearchComponent }  from './search/hero-search.component';
import { HeroFormComponent }    from './form/hero-form.component';


@NgModule({
    imports: [
        CoreModule,
        SharedModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
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