import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable }     from 'rxjs/Observable';

import { Hero }     from './../../models/hero';

@Injectable()
export class TohService {
    private heroesUrl = 'api/heroes';

    constructor(private http: Http) { }

    getHeroes(): Observable<Hero[]> {
        return this.http
                    .get(this.heroesUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
    }

    addHero(name: string) {
        let headers = new Headers({
            'Content-Type': 'application/json',
        });
        let options = new RequestOptions({
            headers: headers,
        });

        return this.http
                    .post(this.heroesUrl, { name }, options)
                    .map(this.extractData)
                    .catch(this.handleError);
     }

     private extractData(res: Response) {
         let body = res.json();
         return body.data || {};
     }

     private handleError(error: Response | any) {
         let errMsg: string;
         if(error instanceof Response) {
             const body = error.json() || '';
             const err = body.error || JSON.stringify(body);
             errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
         } else {
             errMsg = error.message || error.toString();
         }

         console.error(errMsg);
         return Observable.throw(errMsg);
     }
}