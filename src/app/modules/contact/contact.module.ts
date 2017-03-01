import { NgModule }         from '@angular/core';

import { SharedModule }     from './../../shared/shared.module';

import { ContactComponent }     from './contact.component';
import { ContactService }       from './contact.service';
import { HighlightDirective }   from './highlight.directive';

import { ContactRoutingModule }     from './contact-routing.module';

import { testServerToken }   from './../../inject-tokens';

@NgModule({
    imports: [
        SharedModule,
        ContactRoutingModule,
    ],
    declarations: [
        ContactComponent,
        HighlightDirective,
    ],
    exports: [
        // ContactComponent,
    ],
    providers: [ 
        ContactService,
        {
            provide: testServerToken,
            useValue: { name: 'from contact module' },
        },        
    ],
    // bootstrap: [ ContactComponent ],
})
export class ContactModule {}