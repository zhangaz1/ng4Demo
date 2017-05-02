import { Component, OnInit }     from '@angular/core';
import { ActivatedRoute, Router }    from '@angular/router';

import { CanComponentDeactivate }     from './../../../../common/can-deactivate-guard.service';

import { Crisis, CrisisService }     from './../../services/crisis.service';

@Component({
    moduleId: module.id,
    selector: 'crisis-detail',
    templateUrl: './crisis-detail.component.html',
})
export class CrisisDetailComponent implements CanComponentDeactivate, OnInit {
    crisis: Crisis;
    editName: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: CrisisService,
    ) {
        console.log('crisis-detail constructor');
    }

    canDeactivate(): Promise<boolean> | boolean {
        console.log(this.route.snapshot.params['id']);
        console.log(this.router.url);
        
        if(!this.crisis || this.crisis.name === this.editName) {
            return true;
        }

        return confirm('Discard changes?');
    }

    ngOnInit() {
        console.log('crisis-detail on init');
        
        this.route.data
                .subscribe((data: {crisis: Crisis }) => {
                    this.crisis = data.crisis;
                    this.editName = this.crisis.name;
                });
    }

    cancel() {
        this.gotoCrises();
    }

    save() {
        this.crisis.name = this.editName;
        this.gotoCrises();
    }

    gotoCrises() {
        let crisisId = this.crisis
                            ? this.crisis.id
                            : null;

        this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
    }
}