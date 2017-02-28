import { Component, OnInit,
          trigger,
          state,
          style,
          transition,
          animate,
          keyframes,
         } from '@angular/core';

import { Crisis }            from './../../models/crisis';
import { CrisisService }     from './crisis.service';

@Component({
    moduleId: module.id,
    templateUrl: './crisis-list.component.html',
    animations: [
        trigger('crisisState', [
            state('in', style({transform: 'translateX(0)'})),
            transition('void => *', [
              animate(3000, keyframes([
                style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
                style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
                style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
              ]))
            ]),
            transition('* => void', [
              animate(300, keyframes([
                style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
                style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
                style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
              ]))
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