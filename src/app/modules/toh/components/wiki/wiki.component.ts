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
    items: Observable<string[]>;

    private searchTermStream = new Subject<string>();

    constructor(private wikiService: WikiService) { }

    ngOnInit() {
        let wikiService = this.wikiService;
        let doSearch = wikiService.search.bind(wikiService);

        this.items = this.searchTermStream
                        .debounceTime(300)
                        .distinctUntilChanged()
                        .switchMap(doSearch);
    }

    search(term: string) {
        this.searchTermStream.next(term);
    }
}