import { Component }    from '@angular/core';

@Component({
    selector: 'key-up',
    template: `
        <input (keyup)="onKeyUp($event)" />
        <p>{{values.join(' | ')}}</p>
        <p>{{keys.join(' | ')}}</p>
    `,
})
export class KeyUpComponent {
    values: string[] = [];
    keys: string[] = [];

    onKeyUp(event: any): void {
        this.values.push(event.target.value);
        this.keys.push(event.key);
    }
}