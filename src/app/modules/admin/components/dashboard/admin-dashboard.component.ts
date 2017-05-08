import { Component, OnInit }     from '@angular/core';
import { ActivatedRoute }       from '@angular/router';
import { Observable }           from 'rxjs/Observable';
import { SelectivePreloadingStrategyService }  from './../../../../common/selective-preloading-strategy.service';

@Component({
    moduleId: module.id,
    selector: 'admin-dashboard',
    templateUrl: './admin-dashboard.component.html',
})
export class AdminDashboardComponent { 
    sessionId: Observable<string>;
    token: Observable<string>;
    modules: string[];

    constructor(
        private route: ActivatedRoute,
        private preloadStrategy: SelectivePreloadingStrategyService,
    ) {
        this.modules = preloadStrategy.preloadModules;
    }

    ngOnInit() {
        this.sessionId = this.route
                            .queryParams
                            .map(params => params['session_id'] || 'None');

        this.token = this.route
                        .fragment
                        .map(fragment => fragment || 'None');
    }
}