import { Component, OnInit } from '@angular/core';

import { Hero }     from './../../../../models/hero';

import { TohService }     from './../../services/toh.service';

@Component({
    moduleId: module.id,
    // selector: 'toh-list',
    templateUrl: './toh-list.component.html',
    providers: [ TohService ]
})
export class TohListComponent implements OnInit {
    errorMessage: string;
    heroes: Hero[];
    mode = 'observable';

    private handlerError = error => this.errorMessage = <any>error;
    

    constructor(private tohService: TohService) { }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes() {
        this.tohService
            .getHeroes()
            .subscribe(
                heroes => this.heroes = heroes,
                this.handlerError
            );
    }

    addHero(heroName: string) {
        if(!heroName) {
            return;
        }
        
        this.tohService
            .addHero(heroName)
            .subscribe(
                hero => this.heroes.push(hero),
                this.handlerError
            );

        this.errorMessage = 'no service';
    }
}