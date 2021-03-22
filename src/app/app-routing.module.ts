import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { ClientPageComponent } from './components/client-page/client-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { TechnicianPageComponent } from './components/technician-page/technician-page.component';

const routes: Routes = [

  { path: 'admin', component: AdminPageComponent },
  { path: 'client', component: ClientPageComponent },
  { path: 'technician', component: TechnicianPageComponent },
  { path: '**', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
