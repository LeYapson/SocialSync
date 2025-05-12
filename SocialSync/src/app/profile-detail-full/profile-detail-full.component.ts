import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProfileService } from '../profileResource.service';
import { Profile } from '../profile';

@Component({
  selector: 'app-profile-detail-full',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container" *ngIf="profile">
      <a routerLink="/profiles" class="back-btn">← Retour à la liste</a>

      <div class="profile-card" [ngClass]="{'male': profile.gender === 'male', 'female': profile.gender === 'female'}">
        <div class="profile-header">
          <img [src]="profile.image" alt="Photo de profil" class="profile-img">
          <div class="profile-title">
            <h1>{{ profile.firstName }} {{ profile.lastName }}</h1>
            <span class="username">{{ '@' + profile.username }}</span>
          </div>
        </div>

        <div class="profile-body">
          <div class="info-section">
            <h2>Informations personnelles</h2>
            <div class="info-grid">
              <div class="info-item">
                <span class="label">Âge</span>
                <span class="value">{{ profile.age }} ans</span>
              </div>
              <div class="info-item">
                <span class="label">Genre</span>
                <span class="value">{{ profile.gender === 'male' ? 'Homme' : 'Femme' }}</span>
              </div>
              <div class="info-item">
                <span class="label">Date de naissance</span>
                <span class="value">{{ profile.birthDate }}</span>
              </div>
            </div>
          </div>

          <div class="info-section">
            <h2>Contact</h2>
            <div class="info-grid">
              <div class="info-item">
                <span class="label">Email</span>
                <span class="value">{{ profile.email }}</span>
              </div>
              <div class="info-item">
                <span class="label">Téléphone</span>
                <span class="value">{{ profile.phone }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './profile-detail-full.component.css',
})
export class ProfileDetailFullComponent implements OnInit {
  profile: Profile | undefined;

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    // Récupérer l'ID depuis l'URL
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));

      if (this.profileService.profileResource.value()) {
        const profiles = this.profileService.profileResource.value();
        this.profile = profiles.find((p: Profile) => p.id === id);
      }
    });
  }
}
