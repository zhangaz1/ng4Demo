import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';

import { Observable }   from 'rxjs/Observable';
import { Subject }      from 'rxjs/Subject';

import { Hero }         from './../models/hero';
import { HeroSearchService }    from './hero-search.service';

@Component({
    moduleId: module.id,
    selector: 'hero-search',
    templateUrl: './hero-search.component.html',
    styleUrls: [ './hero-search.component.css' ],
    providers: [ HeroSearchService ]
})
export class HeroSearchComponent implements OnInit {
    heroes: Observable<Hero[]>;
    private searchTerms = new Subject<string>();

    constructor(
        private heroSearchService: HeroSearchService,
        private router: Router
    ) { }

    ngOnInit(): void {
        let emptySearchResult = () => Observable.of<Hero[]>([]);

        let getSerachData = term => term 
                                ? this.heroSearchService.search(term)
                                : emptySearchResult();

        let errorHandler = error => {
                                    console.log(error);
                                    return emptySearchResult();
                                };

        this.heroes = this.searchTerms
                            .debounceTime(300)
                            .distinctUntilChanged()
                            .switchMap(getSerachData)
                            .catch(errorHandler);
    }

    search(term: string): void {
        this.searchTerms
            .next(term);
    }

    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}