import { Component }     from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'crisis-detail',
    templateUrl: './crisis-detail.component.html',
})
export class CrisisDetailComponent {
    crisis;
    editName: string;

    cancel() {
        this.gotoCrises();
    }

    save() {
        this.crisis.name = this.editName;
        this.gotoCrises();
    }

    gotoCrises() { }
}