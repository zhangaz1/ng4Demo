import { 
    Component,
    AfterViewInit,
    AfterViewChecked,
    ViewChild,
}     from '@angular/core';

import { MyChildViewComponent } from './my-child-view.component';

@Component({
    selector: 'after-view',
    template: `
        <div>-- child view begins --</div>
        <my-child-view></my-child-view>
        <div>-- child view ends --</div>
    `,
})
export class AfterViewComponent implements AfterViewInit, AfterViewChecked {
    private prevHero = '';

    @ViewChild(MyChildViewComponent)
    viewChild: MyChildViewComponent;
    ngAfterViewInit() {
        this.logIt('AfterViewInit');
        // do something...
    }

    ngAfterViewChecked() {
        if(this.prevHero === this.viewChild.hero) {
            this.logIt('AfterViewChecked (no change)');
        } else {
            this.prevHero = this.viewChild.hero;
            this.logIt('AfterViewChecked');
            // do something...
        }
    }

    logIt(msg) {
        console.log(msg);
    }
}