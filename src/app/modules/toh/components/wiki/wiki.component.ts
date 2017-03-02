import { Component, OnInit }     from '@angular/core';

import { Subject }     from 'rxjs/Subject';
import { Observable }     from 'rxjs/Observable';

import { WikiService }     from './../../services/wiki.service';

@Component({
    moduleId: module.id,
    selector: 'my-wiki',
    templateUrl: 'wiki.component.html',
    providers: [WikiService],
})
export class WikiComponent implements OnInit {
    items: Observable<any>;

    private searchTermStream = new Subject<string>();
    private handleError = error => {
        console.log(error);
        return Observable.throw(error)
    };

    constructor(private wikiService: WikiService) { }

    ngOnInit() {
        let doSearch = term => term 
                            ? this.wikiService.search(term)
                            : Observable.of(null);

        this.items = this.searchTermStream
                        .debounceTime(300)
                        .distinctUntilChanged()
                        .switchMap(doSearch)
                        .catch(this.handleError);
    }

    search(term: string) {
        this.searchTermStream.next(term);
    }
}