import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AppRouting } from './app-routing';
import { LoginComponent } from './login/login.component';
import { RegisterService } from './register.service';
import { NavComponent } from './nav/nav.component';
import { VehicleLicenseComponent } from './vehicle-license/vehicle-license.component';
import { LicenseRegisterComponent } from './license-register/license-register.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    NavComponent,
    VehicleLicenseComponent,
    LicenseRegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRouting
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
