import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
    path: 'login', component: LoginComponent
    },
    {
      path: 'register', component: RegisterComponent
    },
    {
      path: 'aboutus', component: AboutusComponent
    },
    {
      path: 'contactus', component: ContactusComponent
    },
    {
      path: 'dashboard', component: DashboardComponent
    },
    {
      path: 'home', component: HomeComponent
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
