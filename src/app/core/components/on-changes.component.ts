import { 
    Component,
    OnChanges,
    SimpleChanges,
    Input,    
}     from '@angular/core';

import { Hero }     from './../../models/hero';

@Component({
    selector: 'on-changes',
    template: `
        <div class="hero">
            <p>{{hero.name}} can {{power}}</p>

            <h4>-- Change Log --</h4>
            <div *ngFor="let chg of changeLog">{{chg}}</div>
        </div>
    `,
    styles: [`
        .hero { 
            background: LightYellow;
            padding: 8px;
            margin-top: 8px;
        }
        p {
            background: Yellow;            
            padding: 8px;
            margin-top: 8px;
        }
    `],
})
export class OnChangesComponent implements OnChanges {
    @Input()
    hero: Hero;

    @Input()
    power: string;
    
    changeLog: string[] = [];

    ngOnChanges(changes: SimpleChanges) {
        for(let propName in changes) {
            let chng = changes[propName];
            let cur = JSON.stringify(chng.currentValue);
            let prev = JSON.stringify(chng.previousValue);
            let changeMsg = `${propName}: currentValue = ${cur}, perviouseValue = ${prev}`
            this.changeLog.push(changeMsg);
        }
    }

    reset() {
        this.changeLog.length = 0;
    }
}