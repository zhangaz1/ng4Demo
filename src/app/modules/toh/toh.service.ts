import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable }     from 'rxjs/Observable';

import { Hero }     from './../../models/hero';

@Injectable()
export class TohService {
    private heroesUrl = 'app/heroes';

    constructor(private http: Http) { }

    getHeroes() /*: Observable<Hero[]>*/ {
        // return this.http.get(this.heroesUrl);
    }

    addHero(name: string) {
        console.log('add hero:', name);
     }
}