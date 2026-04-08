import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { HomeComponent } from './features/home/home-page/home-page.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { TorneoListComponent } from './features/tornei/torneo-list/torneo-list.component';
import { TorneoFormComponent } from './features/tornei/torneo-form/torneo-form.component';
import { RicaricaComponent } from './features/play/ricarica/ricarica.component';
import { RicercaTorneiComponent } from './features/play/ricerca-tornei/ricerca-tornei.component';
import { TorneoAttivoComponent } from './features/play/torneo-attivo/torneo-attivo.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // { path: 'tornei', component: TorneiListComponent },
  // { path: 'play/lista-tornei', component: TorneiListComponent },
  { path: 'tornei_org', component: TorneoListComponent },
  { path: 'tornei/modifica/:id', component: TorneoFormComponent },
  { path: 'tornei/nuovo', component: TorneoFormComponent },
  { path: 'play/ricarica', component: RicaricaComponent },
  { path: 'play/ricerca', component: RicercaTorneiComponent },
  { path: 'play/torneo-attivo', component: TorneoAttivoComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
