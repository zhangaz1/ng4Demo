import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';

import './rxjs-extensions';

import { ShareModule }      from './../share/share.module';

import { AuthService }         from './../common/auth.service';
import { AuthGuardService }     from './../common/auth-guard.service';
import { CanDeactivateGuardService }     from './../common/can-deactivate-guard.service';


@NgModule({
    exports: [
        BrowserModule,
        ShareModule,
    ],    
    providers: [
        AuthService,
        AuthGuardService,
        CanDeactivateGuardService,
    ],
})
export class CoreModule { }