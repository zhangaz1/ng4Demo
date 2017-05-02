import { Component } from '@angular/core';
import { Router, NavigationExtras }     from '@angular/router';

import { AuthService }     from './../../../common/auth.service';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html'
})

export class LoginComponent {
    message: string;

    constructor(
        public authService: AuthService,
        public router: Router,
    ) { 
        this.setMessage();
    }

    setMessage() {
        let state =  this.authService.isLoggedIn 
                            ? 'in' 
                            : 'out';
        this.message = `Logged ${ state }`;        
    }

    login() {
        this.message = 'Trying to login ...';

        let redirect = () => {
                            let url = this.authService.redirectUrl || '/crisis-center/admin';
                            let navigationExtras: NavigationExtras = { 
                                queryParamsHandling: 'preserve',
                                preserveFragment: true,
                            };
                            this.router.navigate([url], navigationExtras);
                        };

        let loginHandler = () => {
            this.setMessage();
            if(this.authService.isLoggedIn) {
                redirect();
            }
        };

        this.authService.login()
                        .subscribe(loginHandler);
    }

    logout() {
        this.authService.logout();
        this.setMessage();
    }
}