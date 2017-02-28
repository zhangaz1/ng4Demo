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
          state('inactive', style({
            backgroundColor: 'red',
            color: 'yellow',
            transform: 'scale(1)',
          })),
          state('active', style({
            backgroundColor: 'green',
            color: 'red',
            transform: 'scale(1.1)',
          })),
          transition('inactive => active', animate('100ms ease-in')),
          transition('active => inactive', animate('100ms ease-out')),
        ]),
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