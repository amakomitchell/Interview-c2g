import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { HttpModule, Http } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { AppRouting } from './app-routing';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserService } from './user.service';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
// import { ValidateService } from './services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ReviewerComponent } from './reviewer-login/reviewer.component';
import { ReviewListComponent } from './reviewer-login/review-list/review-list.component';

export function getAuthHttp(http: Http) {
  return new AuthHttp(new AuthConfig({
    headerName: 'x-auth-token',
    noTokenScheme: true,
    noJwtError: true,
    globalHeaders: [{'Accept': 'application/json'}],
    tokenGetter: (() => localStorage.getItem('id_token')),
  }), http);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    RegisterComponent,
    FooterComponent,
    ReviewerComponent,
    ReviewListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    AppRouting,
    HttpModule,
    AngularFontAwesomeModule
  ],
  providers: [
    FlashMessagesService,
    UserService,
    {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
