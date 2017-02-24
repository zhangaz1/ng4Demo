import { Injectable }       from '@angular/core';
import { Headers, Http }    from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero }     from './hero';

@Injectable()
export class HeroService {
    private heroesUrl = 'app/heroes';

    constructor(private http: Http) { }
    
    getHero(id: number): Promise<Hero> {
        let findHeroById = heroes => heroes.find(hero => hero.id === id); 

        return this.getHeroes()
                    .then(findHeroById);
    }

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
                    .toPromise()
                    .then(pickDataInResponse)
                    .then(data => data as Hero[])
                    .catch(handleError);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(delay(2000))
                    .then(() => this.getHeroes());
    }
}

function pickDataInResponse(response) {
    return response.json().data;
}

function handleError(reason) {
    console.error(reason);
}

function delay(n: number) {
    return  cb => setTimeout(cb, n);
}