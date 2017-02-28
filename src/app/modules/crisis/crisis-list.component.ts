import { Component, OnInit,
          trigger,
          state,
          style,
          transition,
          animate,
         } from '@angular/core';

import { Crisis }            from './../../models/crisis';
import { CrisisService }     from './crisis.service';

@Component({
    moduleId: module.id,
    templateUrl: './crisis-list.component.html',
    animations: [
        trigger('crisisState', [
            state('inactive', style({transform: 'translateX(0) scale(1)'})),
            state('active',   style({transform: 'translateX(0) scale(1.1)'})),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out')),
            transition('void => inactive', [
              style({transform: 'translateX(-100%) scale(1)'}),
              animate(100)
            ]),
            transition('inactive => void', [
              animate(100, style({transform: 'translateX(100%) scale(1)'}))
            ]),
            transition('void => active', [
              style({transform: 'translateX(0) scale(0)'}),
              animate(200)
            ]),
            transition('active => void', [
              animate(200, style({transform: 'translateX(0) scale(0)'}))
            ]),
        ])
    ],
})
export class CrisisListComponent implements OnInit {
    crises: Promise<Crisis[]>;
    
    constructor(
        private crisisService: CrisisService
    ) { }

    ngOnInit() { 
        this.crises = this.crisisService.getCrises();
    }
}