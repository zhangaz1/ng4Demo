import { Injectable } from '@angular/core';

const FETCH_LATENCY = 500;

import { Crisis }     from './../../models/crisis';
import { CRISES }     from './../../mocks/mock-crises';

@Injectable()
export class CrisisService {
    
    getCrises() {
        return new Promise<Crisis[]>(resolve => 
            setTimeout(
                () => resolve(CRISES), 
                FETCH_LATENCY
            )
        );
    }

    getCrisis(id: number | string) {
        let findCrisis = crises => crises.find(crisis => crisis.id === +id);

        return this.getCrises()
                .then(findCrisis);
    }

}