import {
    Component,
    ContentChild,
    AfterContentInit,
    AfterContentChecked,
} from '@angular/core';

import { Logger }     from './../../../core/services/logger.service';

import { MyChildViewComponent } from './my-child-view.component';

@Component({
    selector: 'after-content',
    template: `
        <div>-- projected content begins --</div>
        <ng-content></ng-content>
        <div>-- projected content ends --</div>
        <p *ngIf="comment" class="comment">
            {{comment}}
        </p>
    `,
})
export class AfterContentComponent implements AfterContentInit, AfterContentChecked {
    private prevHero = '';
    comment = '';

    @ContentChild(MyChildViewComponent)
    contentChild: MyChildViewComponent;

    constructor(private logger: Logger) {
        this.logIt('AfterContent constructor');
    }

    ngAfterContentInit() {
        this.logIt('AfterContentInit');
        this.doSomething();        
    }

    ngAfterContentChecked() {
        if(this.prevHero === this.contentChild.hero) {
            this.logIt('AfterContentChecked (no change)');
        } else {
            this.prevHero = this.contentChild.hero;
            this.logIt('AfterContentChecked');
            this.doSomething();
        }
    }

    private doSomething() {
        this.comment = this.contentChild.hero.length > 10 
                            ? `That's a long name`
                            : '';
    }

    logIt(method: string) {
        let child = this.contentChild;
        let message = `${method}: ${child ? child.hero: 'no'} child content`;
        this.logger.log(message);
    }
}

@Component({
    selector: 'after-content-parent',
    template: `
        <div class="parent">
            <h2>AfterContent</h2>

            <div *ngIf="show">
                <after-content>
                    <my-child-view></my-child-view>
                </after-content>
            <div>

            <h4>-- AfterContent Logs --</h4>
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
export class AfterContentParentComponent {
    logs: string[] = [];
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