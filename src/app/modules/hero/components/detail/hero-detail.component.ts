import { 
    Component,
    OnInit,
    HostBinding,
}     from '@angular/core';

import {
    Router,
    ActivatedRoute,
    Params,
}    from '@angular/router';

import {
    Hero,
    HeroService,
}    from './../../services/hero.service';

@Component({
    moduleId: module.id,
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html',
})
export class HeroDetailComponent implements OnInit {
    hero: Hero;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: HeroService,        
    ) { }

    ngOnInit() {
        let getHero = 
            (params: Params) => this.service.getHero(+params['id']);
        
        let updateThisHero = 
            hero => this.hero = hero;

        this.route
            .params
            .switchMap(getHero)
            .subscribe(updateThisHero);
    }

    gotoHeroes() {
        let heroId = this.hero && this.hero.id;
        this.router
            .navigate([
                '/hero-list', {
                    id: heroId,
                    foo: 'foo',
                },
            ]);
    }
}