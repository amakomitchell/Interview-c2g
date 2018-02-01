import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { VehicleLicenseComponent } from './vehicle-license/vehicle-license.component';
import { LicenseRegisterComponent } from './license-register/license-register.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'register',      component: RegisterComponent },
    { path: 'login',      component: LoginComponent },
    {
        path: 'license', component: VehicleLicenseComponent
    },
    { path: 'license-reg', component: LicenseRegisterComponent }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
      // other imports here
    ],
  })

export class AppRouting {

}