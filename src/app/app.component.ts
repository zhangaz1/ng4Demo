import { Component } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) {
    this.heroes = heroService.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
