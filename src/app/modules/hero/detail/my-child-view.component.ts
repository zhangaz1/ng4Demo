import { Component } from '@angular/core';

@Component({
    selector: 'my-child-view',
    template: `<input [(ngModel)]="hero">`,
})
export class MyChildViewComponent {
    hero = 'Magneta';
}