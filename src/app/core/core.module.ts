import { NgModule, Optional, SkipSelf }     from '@angular/core';


import { Logger }             from './logger.service';
import { UserService }        from './user.service';
import { EventBetterLogger }  from './event-better-logger.service';

import { throwIfAlreadyLoaded }     from './module-import-guard';

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
export class CoreModule {

    constructor(
        @Optional()
        @SkipSelf()
        parentModule: CoreModule
    ) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }

 }