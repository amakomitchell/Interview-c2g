import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthGuard } from './authguard.guard';
import { AnonymousGuard } from './anonymousguard.guard';


const appRoutes: Routes = [
  {
      path: 'welcome',
      component: LoginComponent,
      canActivate: [AnonymousGuard]
  },
  {
      path: 'dashboard',
      component: DashboardComponent,
      canActivate: [AuthGuard]
  },
  { path: '', redirectTo: 'welcome' , pathMatch: 'full' }
];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
  ],
  exports: [
      RouterModule
  ],
  providers: [
    AuthGuard,
    AnonymousGuard
  ]
  })

export class AppRouting {

}