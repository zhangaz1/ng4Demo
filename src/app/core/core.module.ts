import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule }    from '@angular/platform-browser';

import './rxjs-extensions';

import { AuthService }         from './../common/auth.service';
import { AuthGuardService }     from './../common/auth-guard.service';
import { CanDeactivateGuardService }     from './../common/can-deactivate-guard.service';


@NgModule({
    exports: [
        BrowserModule,
        FormsModule,
    ],    
    providers: [
        AuthService,
        AuthGuardService,
        CanDeactivateGuardService,
    ],
})
export class CoreModule { }