import { Component }     from '@angular/core';
import { ActivatedRoute, Router }    from '@angular/router';

import { CanComponentDeactivate }     from './../../../../common/can-deactivate-guard.service';

import { Crisis, CrisisService }     from './../../services/crisis.service';

@Component({
    moduleId: module.id,
    selector: 'crisis-detail',
    templateUrl: './crisis-detail.component.html',
})
export class CrisisDetailComponent implements CanComponentDeactivate {
    crisis: Crisis;
    editName: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: CrisisService,
    ) { }

    canDeactivate(): Promise<boolean> | boolean {
        console.log(this.route.snapshot.params['id']);
        console.log(this.router.url);
        
        if(!this.crisis || this.crisis.name === this.editName) {
            return true;
        }

        return confirm('Discard changes?');
    }

    cancel() {
        this.gotoCrises();
    }

    save() {
        this.crisis.name = this.editName;
        this.gotoCrises();
    }

    gotoCrises() { }
}