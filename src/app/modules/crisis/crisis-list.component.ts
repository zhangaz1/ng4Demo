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
            state('in', style({opacity: 1, transform: 'translateX(0)'})),
            transition('void => *', [
              style({
                opacity: 0,
                transform: 'translateX(-100%)'
              }),
              animate('0.2s ease-in')
            ]),
            transition('* => void', [
              animate('0.2s 10 ease-out', style({
                opacity: 0,
                transform: 'translateX(100%)'
              }))
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