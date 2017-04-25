import { Injectable }     from '@angular/core';
import { CanDeactivate, RouterStateSnapshot, ActivatedRouteSnapshot }    from '@angular/router';
import { Observable }        from 'rxjs/Observable';

import { CrisisDetailComponent }     from './../modules/crisis/components/detail/crisis-detail.component';

@Injectable()
export class CanDeactivateGuardService implements CanDeactivate<CrisisDetailComponent> {
    canDeactivate(
        component: CrisisDetailComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Promise<boolean> | boolean {
        console.log(route.params['id']);
        console.log(state.url);
        if(!component.crisis || component.crisis.name === component.editName) {
            return true;
        }

        return confirm('Discard changes?');
    }
}