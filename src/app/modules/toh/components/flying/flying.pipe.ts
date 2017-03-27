import { Pipe, PipeTransform } from     '@angular/core';

interface Flyer {
    canFly: boolean;
}

@Pipe({
    name: 'flying',
    pure: false,
})
export class FlyingPipe implements PipeTransform {
    transform(allHeroes: Flyer[]) {
        return allHeroes.filter(hero => hero.canFly);
    }
}