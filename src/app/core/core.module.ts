import { NgModule }     from '@angular/core';

import { Logger }             from './logger.service';
import { UserService }        from './user.service';
import { EventBetterLogger }  from './event-better-logger.service';

@NgModule({
    imports: [],
    declarations: [],
    exports: [],
    providers: [
        UserService,
        EventBetterLogger,
        // { provide: Logger, useClass: EventBetterLogger }, // 两个eventBetterLogger实例
        { provide: Logger, useExisting: EventBetterLogger }, // use 同一个EventBetterLogger实例
        // { 
        //   provide: Logger, 
        //   useValue: {
        //     logs: ['Silent logger says "Shhhhh!". Provided via "useValue"'],
        //     log: () => {},
        //   } 
        // },
        // HeroService,
    ]
})
export class CoreModule { }