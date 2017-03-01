import { ModuleWithProviders, NgModule,
        Optional, SkipSelf,  }     from '@angular/core';

import { CommonModule }     from '@angular/common';

import { HttpModule }       from '@angular/http';

import { InMemoryWebApiModule }   from 'angular-in-memory-web-api';
import { InMemoryDataService }    from './in-memory-data.service';

import { Logger }             from './logger.service';
import { UserService, UserServiceConfig }        from './user.service';
import { EventBetterLogger }  from './event-better-logger.service';

import { TitleComponent }       from './title.component';

import { throwIfAlreadyLoaded }     from './module-import-guard';


@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),         
    ],
    declarations: [
        TitleComponent,        
    ],
    exports: [
        TitleComponent,        
    ],
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

    static forRoot(config: UserServiceConfig): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                { provide: UserServiceConfig, useValue: config }
            ],
        }
    }

 }