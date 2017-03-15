import { ModuleWithProviders, NgModule,
        Optional, SkipSelf,  }     from '@angular/core';

import { CommonModule }     from '@angular/common';

import { HttpModule }       from '@angular/http';

import { InMemoryWebApiModule }   from 'angular-in-memory-web-api';
import { InMemoryDataService }    from './services/in-memory-data.service';

import { Logger }                 from './services/logger.service';
import { UserService,
        UserServiceConfig }       from './services/user.service';
import { EventBetterLogger }      from './services/event-better-logger.service';
import { requestOptionsProvider } from './services/default-request-options.service';

import { SpyDirective }     from './directives/spy.directive';

import { TitleComponent }       from './components/title.component';
import { OnChangesComponent }       from './components/on-changes.component';
import { DoCheckComponent }       from './components/do-check.component';

import { throwIfAlreadyLoaded }     from './module-import-guard';


@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),         
    ],
    declarations: [
        SpyDirective,
        TitleComponent,
        OnChangesComponent,
        DoCheckComponent,
    ],
    exports: [
        SpyDirective,
        TitleComponent,
        OnChangesComponent,
        DoCheckComponent,
    ],
    providers: [
        requestOptionsProvider,
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