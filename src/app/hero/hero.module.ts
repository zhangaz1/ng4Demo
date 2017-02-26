import { NgModule }     from '@angular/core';

import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeroesComponent }      from './heroes.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroSearchComponent }  from './hero-search.component';
import { HeroFormComponent }    from './hero-form.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
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