import { 
    Component,
    OnInit,
    HostBinding,
}     from '@angular/core';

import {
    NavigationExtras,
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

    // ngOnInit() {
    //     let getHero = 
    //         (params: Params) => this.service.getHero(+params['id']);
        
    //     let updateThisHero = 
    //         hero => this.hero = hero;

    //     this.route
    //         .params
    //         .switchMap(getHero)
    //         .subscribe(updateThisHero);
    // }

    ngOnInit() {
        let getHero = 
                id => this.service.getHero(id);
        
        let updateThisHero = 
                hero => this.hero = hero;

        let getId = 
                () => +this.route.snapshot.params['id'];
        
        Promise.resolve()
            .then(getId)
            .then(getHero)
            .then(updateThisHero);                    
    }

    gotoHeroes() {
        let navigationExtras: NavigationExtras = {
            queryParamsHandling: 'preserve',
            preserveFragment: true,
            relativeTo: this.route,
        };

        let heroId = this.hero && this.hero.id;
        this.router
            .navigate([
                '../list', {
                    id: heroId,
                    foo: 'foo',
                },
            ], navigationExtras);
    }
}