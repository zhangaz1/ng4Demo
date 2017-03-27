import { Component }        from '@angular/core';

import { Observable }        from 'rxjs/Observable';

@Component({
    selector: 'async',
    template: `
        <h2>Async Hero Message and AsyncPipe</h2>
        <p>Message: {{ message$ | async }}</p>
        <button (click)="resend()">Resend</button>
    `,
})
export class AsyncComponent {
    message$: Observable<string>;

    private messages = [
        'You ar my hero!',
        'You are the best hero!',
        'Will you be my hero?',
    ];

    constructor() {
        this.resend();
    }

    resend() {
        this.message$ = Observable.interval(500)
                                    .map(i => this.messages[i])
                                    .take(this.messages.length);
    }
}