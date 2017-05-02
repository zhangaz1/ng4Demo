import { Component, OnInit }     from '@angular/core';
import { ActivatedRoute }       from '@angular/router';
import { Observable }           from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    selector: 'admin-dashboard',
    templateUrl: './admin-dashboard.component.html',
})
export class AdminDashboardComponent { 
    sessionId: Observable<string>;
    token: Observable<string>;

    constructor(
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.sessionId = this.route
                            .queryParams
                            .map(params => params['session_id'] || 'None');

        this.token = this.route
                        .fragment
                        .map(fragment => fragment || 'None');
    }
}