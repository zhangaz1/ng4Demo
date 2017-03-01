import { Component, OnInit } from '@angular/core';

import { Hero }     from './../../../../models/hero';

import { TohService }     from './../../toh.service';

@Component({
    moduleId: module.id,
    // selector: 'toh-list',
    templateUrl: './toh-list.component.html',
})
export class TohListComponent implements OnInit {
    errorMessage: string;
    heroes: Hero[];
    mode = 'observable';

    constructor(private tohService: TohService) { }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes() {
        this.tohService.getHeroes();
    }

    addHero(heroName: string) {
        if(!heroName) {
            return;
        }
        
        this.tohService.addHero(heroName);

        this.errorMessage = 'no service';
    }
}