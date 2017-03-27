import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'flying',
    templateUrl: './flying.component.html',
})
export class FlyingComponent {
    heroes: any[] = [];
    canFly = true;
    constructor() { 
        this.reset();
    }

    addHero(name: string) {
        name = name.trim();
        if(!name) {
            return;
        }

        let hero = {
            name, 
            canFly: this.canFly,
        };

        this.heroes.push(hero);
    }

    reset() {
        this.heroes = [];
    }
}