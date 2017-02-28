import { Component, OnInit } from '@angular/core';

import { Crisis }            from './../../models/crisis';
import { CrisisService }     from './crisis.service';

@Component({
    moduleId: module.id,
    templateUrl: './crisis-detail.component.html'
})
export class CrisisDetailComponent implements OnInit {
    
    constructor(
        private crisisService: CrisisService
    ) { }

    ngOnInit() { 
        
    }
}