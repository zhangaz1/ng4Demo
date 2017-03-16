import { Component }    from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'key-up',
    template: `
        <input #box 
            (keyup.enter)="onKeyUp(box.value, $event.key)"
            (blur)="onKeyUp(box.value, $event.key)"
        />
        <p>{{box.value}}</p>
        <p>{{values.join(' | ')}}</p>
        <p>{{keys.join(' | ')}}</p>

        <p>The hero's birthday is {{ birthday | date:format | uppercase }}</p>
        <button (click)="toggleFormat()">Toggle Format</button>

        <div>
            <h2>Power Booster</h2>
            <p>Super power boost: {{ 2 | exponentialStrength: 10 }}
        </div>
    `,
})
export class KeyUpComponent {
    values: string[] = [];
    keys: string[] = [];

    onKeyUp(value: string, key: string): void {
        this.values.push(value);
        this.keys.push(key);
    }

    birthday = Date.now(); // new Date(1988, 3, 15);
    toggle = true;

    get format() {
        return this.toggle 
            ? 'shortDate'
            : 'fullDate';
            
    }

    toggleFormat() {
        this.toggle = !this.toggle;
    }
}