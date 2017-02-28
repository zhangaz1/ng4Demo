import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }     from '@angular/router';

import { Crisis }            from './../../models/crisis';
import { CrisisService }     from './crisis.service';

@Component({
    moduleId: module.id,
    templateUrl: './crisis-detail.component.html'
})
export class CrisisDetailComponent implements OnInit {
    crisis: Crisis;

    constructor(
        private route: ActivatedRoute,
        private crisisService: CrisisService
    ) { }

    ngOnInit() { 
        let id = parseInt(this.route.snapshot.params['id'], 10);
        
        this.crisisService
            .getCrisis(id)
            .then(crisis => this.crisis = crisis);
    }
}