import { Injectable }   from '@angular/core';
import { PreloadingStrategy, Route }    from '@angular/router';

import { Observable }   from 'rxjs/Observable';

@Injectable()
export class SelectivePreloadingStrategyService implements PreloadingStrategy {
    preloadModules: string[] = [];

    preload(route: Route, load: () => Observable<any>): Observable<any> {
        if(route.data && route.data['preload']) {
            this.preloadModules.push(route.path);
            console.log('preload:', route.path);
            return load();
        } else {
            console.log('not preload:', route.path);
            return Observable.of(null);
        }
    }
}