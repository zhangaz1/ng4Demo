import { Injectable }       from '@angular/core';
import { Headers, Http }    from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero }     from './hero';

@Injectable()
export class HeroService {
    private headers = new Headers({ 'Content-Type': 'application/json'});
    private heroesUrl = 'app/heroes';

    constructor(private http: Http) { }

    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
                .put(url, JSON.stringify(hero), { headers: this.headers })
                .toPromise()
                .then(() => hero)
                .catch(handleError);
    }
    
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

function handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
}

function delay(n: number) {
    return  cb => setTimeout(cb, n);
}