import { NgModule }         from '@angular/core';

import { SharedModule }     from './../../shared/shared.module';

import { AwesomePipe }          from './awesome.pipe';
import { ContactComponent }     from './contact.component';
import { ContactService }       from './contact.service';
import { HighlightDirective }   from './highlight.directive';

import { ContactRoutingModule }     from './contact-routing.module';

@NgModule({
    imports: [
        SharedModule,
        ContactRoutingModule,
    ],
    declarations: [
        ContactComponent,
        HighlightDirective,
        AwesomePipe,
    ],
    exports: [
        // ContactComponent,
        AwesomePipe,
    ],
    providers: [ ContactService ],
    // bootstrap: [ ContactComponent ],
})
export class ContactModule {}