import { Injectable, resource, signal } from '@angular/core';
import { Profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private usersURL = "https://dummyjson.com/users?limit=";

  // Création d'un signal pour stocker la limite de profils
  limitCount = signal(5);

  profileResource = resource({
    // Utiliser la valeur du signal comme paramètre de requête
    request: () => this.limitCount(),
    loader: async ({request: profilesCount}) => {
      const response = await fetch(this.usersURL + profilesCount)
      if(!response.ok) {
        throw new Error ('Failed to fetch')
      }
      const {users} = await response.json()
      return users;
    }
  });

  // Méthode pour mettre à jour la limite et déclencher un nouvel appel
  getProfilesByLimit(value: number) {
    this.limitCount.set(value);
  }

  // Garder la méthode synchrone pour compatibilité
  getProfiles(): Profile[] {
    return this.profileResource.value() || [];
  }
}
