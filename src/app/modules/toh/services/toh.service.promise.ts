import { Injectable }     from '@angular/core';
import { Http, 
        Response, 
        Headers, 
        RequestOptions }  from '@angular/http';

import { Hero }     from './../../../models/hero';

@Injectable()
export class TohService {
    private heroesUrl = 'app/heroes';

    constructor(private http: Http,private defaultRequestOptions: RequestOptions) { }

    getHeroes(): Promise<Hero[]> {
        return this.http
                    .get(this.heroesUrl)                    
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
    }

    addHero(name: string) {
        return this.http
                    .post(this.heroesUrl, { name }, this.defaultRequestOptions)
                    .toPromise()
                    .then(this.extractData)
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
         return Promise.reject(errMsg);
     }
}