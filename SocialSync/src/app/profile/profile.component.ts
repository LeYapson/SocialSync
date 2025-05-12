import { Component, inject, OnInit, effect } from '@angular/core';
import { Profile } from '../profile';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProfileDetailComponent } from '../profile-detail/profile-detail.component';
import { ProfileService } from '../profileResource.service';

@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [CommonModule, ProfileDetailComponent, FormsModule, RouterLink],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  // Déclaration des propriétés
  profiles: Profile[] = [];
  filteredProfiles: Profile[] = [];
  searchText: string = "";
  selectedLimit: number = 5; // Valeur par défaut

  // Injection du service avec la fonction inject()
  private profileService: ProfileService = inject(ProfileService);

  // Accès direct à la ressource
  profilesResource = this.profileService.profileResource;

  constructor() {
    // Utiliser effect pour réagir aux changements de données
    effect(() => {
      // Ce code s'exécute automatiquement quand profilesResource.value() change
      if (this.profilesResource.value()) {
        this.profiles = this.profilesResource.value();
        this.filteredProfiles = this.profiles;
        console.log(`Données chargées: ${this.profiles.length} profils disponibles`);
      }
    });
  }

  ngOnInit() {
    // Le chargement initial est maintenant géré par l'effect
  }

  // Nouvelle méthode pour gérer le changement de limite
  onLimitChange(): void {
    console.log(`Nouvelle limite sélectionnée: ${this.selectedLimit} profils`);
    this.profileService.getProfilesByLimit(this.selectedLimit);
  }

  // Méthodes existantes
  getProfilesFiltered(textSearch: string): void {
    if (!textSearch.trim()) {
      this.resetFilter();
      return;
    }

    // Filtrer les profils uniquement lorsqu'ils sont chargés
    if (this.profiles.length > 0) {
      this.filteredProfiles = this.profiles.filter(profile =>
        profile.lastName.toLowerCase().startsWith(textSearch.toLowerCase())
      );
      console.log(`Filtrage appliqué: ${this.filteredProfiles.length} profils correspondent à "${textSearch}"`);
    }
  }

  resetFilter(): void {
    this.searchText = "";
    this.filteredProfiles = this.profiles;
    console.log('Filtrage réinitialisé');
  }
}
