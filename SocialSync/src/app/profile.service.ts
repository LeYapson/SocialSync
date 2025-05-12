import { Injectable } from '@angular/core';
import { PROFILES } from './mock-profiles';
import { Profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  // Méthode pour récupérer tous les profils
  getProfiles(): Profile[] {
    return PROFILES;
  }

  // Méthode optionnelle pour récupérer un profil spécifique par son ID
  getProfileById(id: number): Profile | undefined {
    return PROFILES.find(profile => profile.id === id);
  }
}
