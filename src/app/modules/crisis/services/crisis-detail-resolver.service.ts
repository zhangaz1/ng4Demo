import { Injectable }     from '@angular/core';
import { 
    Router, 
    Resolve, 
    RouterStateSnapshot, 
    ActivatedRouteSnapshot,
} from '@angular/router';

import { Crisis, CrisisService }     from './crisis.service';

@Injectable()
export class CrisisDetailResolverService implements Resolve<Crisis>{
    constructor(
        private router: Router,
        private service: CrisisService,
    ) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Promise<Crisis> {
        let id = route.params['id'];

        return this.service
                    .getCrisis(id)
                    .then(crisis => {
                        if(crisis){
                            return crisis;
                        } else {
                            this.router.navigate(['/crisis-center']);
                            return null;
                        }
                    });
    }
}