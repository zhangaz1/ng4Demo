import { NgModule }                 from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

import { CoreModule }     from './core/core.module';

import { PageNotFoundComponent } from './page-not-found.component';

import { AdminModule }     from './modules/admin/admin.module';
import { LoginModule }     from './modules/login/login.module';

// import { HeroModule }   from './modules/hero/hero.module';
import { CrisisModule }     from './modules/crisis/crisis.module';

import { ComposeMessageComponent }     from './components/popup/compose-message.component';

import { HeroListComponent }     from './modules/hero/components/list/hero-list.component';
import { CrisisListComponent }     from './modules/crisis/components/list/crisis-list.component';


const appRoutes: Routes = [{
                            path: 'compose',
                            component: ComposeMessageComponent,
                            outlet: 'popup',
                        }, {
                            path: 'hero',
                            loadChildren: 'app/modules/hero/hero.module#HeroModule',
                        }, {
                            path: '',
                            redirectTo: '/hero-list',
                            pathMatch: 'full',
                        }, {
                            path: '**',
                            component: PageNotFoundComponent,
                        }, ];

@NgModule({
    declarations: [
        PageNotFoundComponent,
        ComposeMessageComponent,
    ],
    imports: [
        CoreModule,        
        AdminModule,
        LoginModule,
        // HeroModule,
        CrisisModule,
        RouterModule.forRoot(appRoutes),
    ],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule { }