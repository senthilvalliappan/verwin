import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { AppRoutingModule } from './app.routing';
import { Service } from './services/Service';
import { RegisterComponent } from './components/register/register.component';
import { LoginService } from './services/login.service';
import { AuthService } from './services/auth.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,HttpModule,FormsModule,AngularFireModule.initializeApp(environment.firebase,'TBL_USERS'),AngularFirestoreModule,AngularFireAuthModule

  ],
  providers: [LoginService,Service,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
