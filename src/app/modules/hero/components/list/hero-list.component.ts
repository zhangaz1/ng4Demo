import { 
    Component,
    OnInit,
} from '@angular/core';

import {
    Router,
    ActivatedRoute,
    Params,
} from '@angular/router';

import { Observable } from 'rxjs/Observable';

import {
    Hero,
    HeroService,
} from './../../services/hero.service'

@Component({
    selector: 'hero-list',
    moduleId: module.id,
    templateUrl: './hero-list.component.html',
})
export class HeroListComponent implements OnInit {
    heroes: Observable<Hero[]>;

    private selectedId: number;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: HeroService,
    ) { }

    ngOnInit() {
    console.log('hero list start');
        
        let getHeroes = 
            (params: Params) => {
                this.selectedId = +params['id'];
                return this.service
                            .getHeroes();
            };

        this.heroes = this.route
                        .params
                        .switchMap(getHeroes);
    }

    isSelected(hero: Hero) {
        return hero.id === this.selectedId;
    }

    onSelect(hero: Hero) {
        this.router
            .navigate(['./hero', hero.id]);
    }
}