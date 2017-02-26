import { Component }    from '@angular/core';

import { Hero }     from './hero';

@Component({
    moduleId: module.id,
    selector: 'hero-form',
    templateUrl: './hero-form.component.html',
    styleUrls: [ './hero-form.component.css' ],
})
export class HeroFormComponent {

    powers = [
        'Really Smart',
        'Super Flexible',
        'Super Hot',
        'Weather Changer',
    ];

    model = new Hero(
                    18, 
                    'Dr IQ', 
                    this.powers[0], 
                    'Chuck Overstreet'
                );

    submitted = false;

    onSubmit(ngForm) {
        if(ngForm.form.valid){
            this.submitted = true;
        }
    }

    get diagnostic() {
        return JSON.stringify(this.model);
    }

    newHero(): void {
        this.model = new Hero(42, '', '');
    }
}