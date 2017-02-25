import { Component }    from '@angular/core';

@Component({
    selector: 'key-up',
    template: `
        <input #box (keyup)="onKeyUp(box.value, $event.key)" />
        <p>{{box.value}}</p>
        <p>{{values.join(' | ')}}</p>
        <p>{{keys.join(' | ')}}</p>        
    `,
})
export class KeyUpComponent {
    values: string[] = [];
    keys: string[] = [];

    onKeyUp(value: string, key: string): void {
        this.values.push(value);
        this.keys.push(key);
    }
}