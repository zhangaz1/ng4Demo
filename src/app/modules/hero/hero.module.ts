import { NgModule }     from '@angular/core';

import { HeroService }           from './services/hero.service';
import { HeroRoutingModule }     from './hero-routing.module';

@NgModule({
    imports: [
        HeroRoutingModule,
    ],
    providers: [
        HeroService,
    ],
})
export class HeroModule { }