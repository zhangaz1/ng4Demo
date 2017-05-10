import { 
    Component,
    OnInit,
} from '@angular/core';

import {
    NavigationExtras,
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
    sessionId: Observable<string>;
    token: Observable<string>;

    selectedHero: Hero;
    showSad = true;

    private selectedId: number;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: HeroService,
    ) { }

    ngOnInit() {
        let getHeroes = 
            (params: Params) => {
                this.selectedId = +params['id'];
                return this.service
                            .getHeroes();
            };

        this.heroes = this.route
                        .params
                        .switchMap(getHeroes);

        this.sessionId = this.route
                            .queryParams
                            .map(params => params['session_id'] || 'None');

        this.token = this.route
                        .fragment
                        .map(fragment => fragment || 'None');
    }

    isSelected(hero: Hero) {
        return hero.id === this.selectedId;
    }

    onSelect(hero: Hero) {
        let sessionId = 123456789;

        let navigationExtras: NavigationExtras = {
            queryParams: { 'session_id': sessionId, },
            fragment: 'anchor',
        };

        this.router
            .navigate(['./hero', hero.id], navigationExtras);
    }
}