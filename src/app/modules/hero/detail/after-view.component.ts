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
        <div>{{comment}}</div>
        <div>-- child view ends --</div>
    `,
})
export class AfterViewComponent implements AfterViewInit, AfterViewChecked {
    private prevHero = '';
    comment = '';

    @ViewChild(MyChildViewComponent)
    viewChild: MyChildViewComponent;
    ngAfterViewInit() {
        this.logIt('AfterViewInit');
        this.doSomething();
    }

    ngAfterViewChecked() {
        if(this.prevHero === this.viewChild.hero) {
            this.logIt('AfterViewChecked (no change)');
        } else {
            this.prevHero = this.viewChild.hero;
            this.logIt('AfterViewChecked');
            this.doSomething();
        }
    }

    logIt(msg) {
        console.log(msg);
    }

    doSomething() {
        let c = this.viewChild.hero.length > 10
                    ? `That's a long name`
                    : '';
        if(c !== this.comment) {
            setTimeout(() => this.comment = c);
        }
    }
}