import { Injectable }     from '@angular/core';
import { 
    CanLoad,
    CanActivate, 
    Route,
    Router, 
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild,
    NavigationExtras,
}     from '@angular/router';

import { AuthService }     from './auth.service';

@Injectable()
export class AuthGuardService implements CanLoad, CanActivate, CanActivateChild {

    constructor(
        private authService: AuthService,
        private router: Router,
    ) { }

    canLoad(route: Route): boolean {
        let url = `/${route.path}`;
        return this.checkLogin(url);
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): boolean {
        let url: string = state.url;
        return this.checkLogin(url);
    }

    canActivateChild(
        router: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): boolean {
        return this.canActivate(router, state);
    }

    checkLogin(url: string): boolean {
        if(this.authService.isLoggedIn) {
            return true;
        }

        this.authService.redirectUrl = url;
        let sessionId = 123456789;

        let navigationExtras: NavigationExtras = {
            queryParams: { 'session_id': sessionId, },
            fragment: 'anchor',
        };

        this.router.navigate(['login', navigationExtras]);
        return false;
    }
}