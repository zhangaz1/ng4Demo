import { Component }    from '@angular/core';

@Component({
    selector: 'key-up',
    template: `
        <input #box (keyup)="onKeyUp($event)" />
        <p>{{box.value}}</p>
        <p>{{values.join(' | ')}}</p>
        <p>{{keys.join(' | ')}}</p>        
    `,
})
export class KeyUpComponent {
    values: string[] = [];
    keys: string[] = [];

    onKeyUp(event: KeyboardEvent): void {
        this.values.push((<HTMLInputElement>event.target).value);
        this.keys.push(event.key);
    }
}