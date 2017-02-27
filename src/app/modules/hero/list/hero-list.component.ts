import { Component, OnInit }  from '@angular/core';
import { Router }             from '@angular/router';

import { Hero }         from './../../../models/hero';
import { HeroService }        from './../hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];

  constructor(
    private router: Router,
    private heroService: HeroService
  ) {
    
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  trackByHeroes(index: number, hero: Hero) {
    return hero.id;
  }

  add(name: string): void {
    name = name.trim();
    if(!name) {
      return;
    }

    this.heroService
        .create(name)
        .then(hero => {
          this.getHeroes();// this.heroes.push(hero);
          this.selectedHero = null;
        });
  }

  delete(hero: Hero): void {
    this.heroService
        .delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if(this.selectedHero === hero) {
            this.selectedHero = null;
          }
        });
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
