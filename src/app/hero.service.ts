import { Injectable }       from '@angular/core';
import { Headers, Http }    from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Logger }   from './logger.service';

import { Hero }     from './hero';

@Injectable()
export class HeroService {
    private headers = new Headers({ 'Content-Type': 'application/json'});
    private heroesUrl = 'app/heroes';

    constructor(private logger: Logger, private http: Http) { }

    create(name: string): Promise<Hero> {
        return this.http
                .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers})
                .toPromise()
                .then(pickDataInResponse)
                .catch(errorHandler);
    }

    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
                .put(url, JSON.stringify(hero), { headers: this.headers })
                .toPromise()
                .then(() => hero)
                .catch(errorHandler);
    }

    delete(id: number): Promise<void> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http
                    .delete(url, { headers: this.headers })
                    .toPromise()
                    .then(() => null)
                    .catch(errorHandler);
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
                    .catch(errorHandler);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(delay(2000))
                    .then(() => this.getHeroes());
    }
}

function pickDataInResponse(response) {
    return response.json().data;
}

function errorHandler(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
}

function delay(n: number) {
    return  cb => setTimeout(cb, n);
}