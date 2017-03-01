import { Component, OnInit } from '@angular/core';

import { Hero }     from './../../../../models/hero';

@Component({
    moduleId: module.id,
    // selector: 'toh-list',
    templateUrl: './toh-list.component.html',
})
export class TohListComponent implements OnInit {
    errorMessage: string;
    heroes: Hero[];
    mode = 'observable';
    constructor() { }

    ngOnInit() { }

    addHero(heroName: string) {
        if(!heroName) {
            return;
        }
        this.errorMessage = 'no service';
    }
}