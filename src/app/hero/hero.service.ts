import { Injectable }       from '@angular/core';
import { Headers, Http }    from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Logger }   from './../core/logger.service';

import { Hero }         from './../models/hero';

@Injectable()
export class HeroService {
    private headers = new Headers({ 'Content-Type': 'application/json'});
    private heroesUrl = 'app/heroes';

    constructor(
            private logger: Logger, 
            private http: Http, 
            private isAuthorized: boolean
        ) { }

    create(name: string): Promise<Hero> {
        this.logger.log(`create hero: ${name}`);

        return this.http
                .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers})
                .toPromise()
                .then(pickDataInResponse)
                .catch(errorHandler);
    }

    update(hero: Hero): Promise<Hero> {
        this.logger.log(`update hero: ${JSON.stringify(hero)}`);

        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
                .put(url, JSON.stringify(hero), { headers: this.headers })
                .toPromise()
                .then(() => hero)
                .catch(errorHandler);
    }

    delete(id: number): Promise<void> {
        this.logger.log(`delete hero: ${id}`);

        const url = `${this.heroesUrl}/${id}`;
        return this.http
                    .delete(url, { headers: this.headers })
                    .toPromise()
                    .then(() => null)
                    .catch(errorHandler);
    }
    
    getHero(id: number): Promise<Hero> {
        this.logger.log(`get hero: ${id}`);

        let findHeroById = heroes => heroes.find(hero => hero.id === id); 

        return this.getHeroes()
                    .then(findHeroById);
    }

    getHeroes(): Promise<Hero[]> {
        let auth = this.isAuthorized 
                        ? 'authorized' 
                        : 'unauthorized';

        this.logger.log(`get heroes for ${auth} user.`);

        let filterHeroes = heroes => heroes.filter(hero => this.isAuthorized || !hero.isSecret);

        return this.http.get(this.heroesUrl)
                    .toPromise()
                    .then(pickDataInResponse)
                    .then(data => data as Hero[])
                    .then(filterHeroes)
                    .catch(errorHandler);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        this.logger.log(`get heroes slowly`);

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