import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoreModule }     from './../../core/core.module';

import { LoginComponent } from './components/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
];

@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        CoreModule,
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
    ],
})
export class LoginRoutingModule { }
