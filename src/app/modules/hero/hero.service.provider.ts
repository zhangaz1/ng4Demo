import { Http }     from '@angular/http';

// ???
import { Logger }             from './../../core/services/logger.service';
import { UserService }        from './../../core/services/user.service';

import { HeroService }  from './hero.service';

export function heroServiceFactory (logger: Logger, userService: UserService, http: Http) {
    return new HeroService(logger, http, userService.user.isAuthorized);
};

export let heroServiceProvider = {
    provide: HeroService,
    useFactory: heroServiceFactory,
    deps: [Logger, UserService, Http],
};