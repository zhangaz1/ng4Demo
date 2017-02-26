import { NgModule }     from '@angular/core';

import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { RouterModule }     from '@angular/router';
import { HttpModule }       from '@angular/http';

import { Logger }             from './logger.service';
import { UserService }        from './user.service';
import { EventBetterLogger }  from './event-better-logger.service';

@NgModule({
    imports: [],
    declarations: [],
    exports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        HttpModule,
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
export class CoreModule { }