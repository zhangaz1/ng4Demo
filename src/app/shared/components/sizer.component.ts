import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-sizer',
    template: `
        <div>
            <button (click)="dec()" title="smaller">-</button>
            <label>FontSize: {{size}}px</label>
            <button (click)="inc()" title="bigger">+</button>
        </div>
    `,
    styles: [`:host {
                  display: block;
                  border: solid 1px blue;
                }`],
    // inputs: ['size:mySize'],
    // outputs: ['sizeChange:mySizeChange'],
})
export class SizerComponent {
    @Input('mySize') 
    size: number | string;
    
    @Output('mySizeChange') 
    sizeChange = new EventEmitter<number>();

    dec() {
        this.resize(-1);
    }

    inc() {
        this.resize(1);
    }

    resize(delta: number) {
        this.size = Math.min(40, Math.max(8, (Number(this.size) || 0) + delta));
        this.sizeChange.emit(this.size);
    }
}