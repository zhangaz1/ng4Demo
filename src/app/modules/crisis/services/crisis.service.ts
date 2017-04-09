import { Injectable }     from '@angular/core';

export class Crisis {
    constructor(
        public id: number,
        public name: string,
    ) { }
}

const CRISIS = [
    new Crisis(1, 'Dragon Burning Cities'),
    new Crisis(2, 'Sky Rains Great White Sharks'),
    new Crisis(3, 'Giant Asteroid Heading For Earth'),
    new Crisis(4, 'Procrastinators Meeting Delayed Again'),
];

let crisisPromise = Promise.resolve(CRISIS);

@Injectable()
export class CrisisService {
    getCrisises() {
        return crisisPromise;
    }

    getCrisis(id: number | string) {
        let idFinder = crisis => crisis.id === +id;
        let findCrisisById = crisises => crisises.find(idFinder);

        return this.getCrisises()
                    .then(findCrisisById);
    }
}