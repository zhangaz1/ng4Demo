import { InMemoryDbService }    from 'angular-in-memory-web-api';

import { HEROES }   from './../mocks/mock-heroes';

export class InMemoryDataService implements InMemoryDataService {
    createDb() {
        return {
            heroes: HEROES
        };
    }
}