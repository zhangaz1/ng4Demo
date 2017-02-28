import { Injectable, Optional }       from '@angular/core';

export class UserServiceConfig {
  userName = 'Philip Marlowe';
}

@Injectable()
export class UserService {
    public user = {
        name: 'admin',
        isAuthorized: false,
    };
    userName = 'Sherlock Holmes';

    constructor(
        @Optional() config: UserServiceConfig
    ) {
        if(config) {
            this.userName = config.userName;
        }
    }
}