import { NgModule }     from '@angular/core';

import { CoreModule }     from './../../core/core.module';
import { SharedModule }     from './../../shared/shared.module';

import { HeroRoutingModule } from './hero.routing.module';

import { HeroService }        from './hero.service';
import { heroServiceProvider }  from './hero.service.provider';

import { HeroesComponent }      from './list/hero-list.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './detail/hero-detail.component';
import { HeroSearchComponent }  from './search/hero-search.component';
import { HeroFormComponent }    from './form/hero-form.component';

import { MyChildViewComponent }       from './detail/my-child-view.component';
import { AfterViewComponent }       from './detail/after-view.component';

@NgModule({
    imports: [
        CoreModule,
        SharedModule,
        HeroRoutingModule,
    ],
    declarations: [
        HeroesComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroSearchComponent,
        HeroFormComponent,
        MyChildViewComponent,
        AfterViewComponent,
    ],
    exports: [
        HeroesComponent,
    ],
    providers: [
        heroServiceProvider,
    ]
})
export class HeroModule { }