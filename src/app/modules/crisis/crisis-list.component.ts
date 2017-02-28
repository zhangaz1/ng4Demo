import { Component, OnInit,
          trigger,
          state,
          style,
          transition,
          animate,
          keyframes,
          group,
         } from '@angular/core';

import { Crisis }            from './../../models/crisis';
import { CrisisService }     from './crisis.service';

@Component({
    moduleId: module.id,
    templateUrl: './crisis-list.component.html',
    animations: [
        trigger('crisisState', [
            state('in', style({width: 120, transform: 'translateX(0)', opacity: 1})),
            transition('void => *', [
              style({width: 10, transform: 'translateX(50px)', opacity: 0}),
              group([
                animate('0.3s 0.1s ease', style({
                  transform: 'translateX(0)',
                  width: 120
                })),
                animate('0.3s ease', style({
                  opacity: 1
                }))
              ])
            ]),
            transition('* => void', [
              group([
                animate('0.3s ease', style({
                  transform: 'translateX(50px)',
                  width: 10
                })),
                animate('0.3s 0.2s ease', style({
                  opacity: 0
                }))
              ])
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