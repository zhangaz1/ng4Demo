import { Component }        from '@angular/core';

@Component({
    selector: 'fetch',
    template: `
        <h2>Heroes from JSON File</h2>

        <div *ngFor="let hero of ('mocks/heroes.json' | fetch)">
            {{hero.name}}
        </div>

        <p>Heroes as JSON:
            {{'mocks/heroes.json' | fetch | json}}
        </p>
    `,
})
export class FetchComponent { }