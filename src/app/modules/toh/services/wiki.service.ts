import { Injectable }                 from '@angular/core';
import { Jsonp, URLSearchParams }     from '@angular/http';

@Injectable()
export class WikiService {
    constructor(private jsonp: Jsonp) { }

    search(term: string): any {
        
        let wikiUrl = 'http://en.wikipedia.org/w/api.php';

        let params = new URLSearchParams();
        params.set('search', term);
        params.set('action', 'opensearch');
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');

        return this.jsonp
                    .get(wikiUrl,{ search: params })
                    .map(response => response.json());
    }
}