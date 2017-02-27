import { Injectable } from '@angular/core';

export class Contact {
    constructor(public id: number, public name: string) { }
}

const CONTACTS: Contact[] = [
    new Contact(21, 'Sam spade'),
    new Contact(22, 'Nick Danger'),
    new Contact(23, 'Nancy Drew'),
];

const FETCH_LATENCY = 500;

@Injectable()
export class ContactService {
    getContacts() {
        return new Promise<Contact[]>(resolve => {
            setTimeout(() => resolve(CONTACTS), FETCH_LATENCY);
        });
    }

    getContact(id: number | string) {
        let findContact = contacts => contacts.find(
                                            contact => contact.id === +id
                                        );

        return this.getContacts()
                .then(findContact);
    }
}