import { Injectable }       from '@angular/core';

import { Logger }           from './logger.service';
import { UserService }      from './user.service';

@Injectable()
export class EventBetterLogger extends Logger {

    constructor(private userService: UserService) {
        super();
    }

    log(message: string): void {
        let name = this.userService.user.name;
        super.log(`Message to ${name}: ${message}`);
    }

}