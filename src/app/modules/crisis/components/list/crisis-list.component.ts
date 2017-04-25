import { Component, OnInit }     from '@angular/core';

import { Router, ActivatedRoute, Params }     from '@angular/router';

import { Observable }     from 'rxjs/Observable';

import { Crisis, CrisisService }     from './../../services/crisis.service';

@Component({
    moduleId: module.id,
    selector: 'crisis-list',
    templateUrl: './crisis-list.component.html',
})
export class CrisisListComponent implements OnInit {
    crises: Observable<Crisis[]>;
    selectedId: number;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: CrisisService,
    ) { }

    ngOnInit() {
        this.crises = this.route.params
                                .switchMap((params: Params) => {
                                    this.selectedId = +params['id'];
                                    return this.service.getCrisises();
                                })
    }

    isSelected(crisis: Crisis) {
        return crisis.id === this.selectedId;
    }

    onSelect(crisis: Crisis) {
        this.selectedId = crisis.id;
        this.router.navigate([crisis.id], { relativeTo: this.route });
    }
}