
import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuardService } from './services/auth-guard.service';
const routes:Routes=[
    {path:"" , component:LoginComponent},
    {path:"dashBoard" , component:DashboardComponent,canActivate:[AuthGuardService]},
    {path:"register" , component:RegisterComponent}


];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
    
    })
    
    export class AppRoutingModule{
    
    }