import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { TorneiListComponent } from './features/tornei/tornei-list/tornei-list.component';
import { HomeComponent } from './features/home/home-page/home-page.component';
import { RegisterComponent } from './features/auth/register/register.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'tornei', component: TorneiListComponent },
  { path: 'play/lista-tornei', component: TorneiListComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
