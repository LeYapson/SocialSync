import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ProfileDetailFullComponent } from './profile-detail-full/profile-detail-full.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profiles', component: ProfileComponent },
  { path: 'detail/:id', component: ProfileDetailFullComponent },
  { path: '**', redirectTo: '/home' } // Route pour gérer les URL non trouvées
];
