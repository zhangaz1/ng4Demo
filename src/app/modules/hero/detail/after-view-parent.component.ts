import { Component }     from '@angular/core';

import { Logger }     from './../../../core/services/logger.service';

@Component({
    selector: 'after-view-parent',
    template: `
        <div class="parent">
            <h2>AfterView</h2>
            
            <after-view *ngIf="show"></after-view>

            <h4>-- AfterView Logs --</h4>
            <p>
                <button (click)="reset()">Reset</button>
            </p>
            <div *ngFor="let msg of logs">{{msg}}</div>
        </div>
    `,
    styles: [`
        .parent {
            background: burlywood;
        }
    `],
})
export class AfterViewParentComponent {
    logs: string[];
    show = true;

    constructor(private logger: Logger) {
        this.logs = logger.logs;
    }

    reset() {
        this.logs.length = 0;
        this.show = false;
        this.logger.tickThen(() => this.show = true);
    }
}