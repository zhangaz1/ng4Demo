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
          transition('void => *', [
            style({
                position: 'relative',
                left: -50,
                backgroundColor: 'red',
                color: 'yellow',
                transform: 'scale(1)',
              }),
            animate(
                  '1000ms ease-out',
                  style({
                    position: 'relative',
                    left: 0,
                    backgroundColor: 'green',
                    color: 'red',
                    transform: 'scale(1.1)',
                  })
              )
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