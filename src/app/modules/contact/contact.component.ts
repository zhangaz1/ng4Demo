import { Component, OnInit, Inject, Optional } from '@angular/core';

import { Contact, ContactService }         from './contact.service';
import { UserService }                     from './../../core/user.service';

import { testServerToken }   from './../../inject-tokens';

@Component({
    moduleId: module.id,
    // selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: [
        './contact.component.css',
    ],
    providers: [{
        provide: testServerToken,
        useValue: { name: 'from contact conponent' },
    }],
})
export class ContactComponent implements OnInit {
    contact: Contact;
    contacts: Contact[];

    msg = 'Loading contacts ...';
    userName = '';

    constructor(
        private contactService: ContactService, 
        userService: UserService,
        @Inject(testServerToken) @Optional() testService: any
    ) { 
        this.userName = userService.userName;
        if(testService){
            console.log('TestService: ', testService);
        } else {
            console.log('no TestService');
        }
    }

    ngOnInit() {
        this.contactService.getContacts()
            .then(contacts => {
                this.msg = '';
                this.contacts = contacts;
                this.contact = contacts[0];
            });
    }

    next() {
        let ix = 1 + this.contacts.indexOf(this.contact);
        if(ix >= this.contacts.length){
            ix = 0;
        }
        this.contact = this.contacts[ix];
    }

    onSubmit() {
        this.displayMessage('Saved ' + this.contact.name);
    }

    newContact() {
        this.displayMessage('New contact');
        this.contact = {id: 42, name: ''};
        this.contacts.push(this.contact);
    }

    displayMessage(msg: string) {
        this.msg = msg;
        setTimeout(() => this.msg = '', 1500);
    }
}