import { Component } from '@angular/core';
import { PROFILES } from '../mock-profiles';
import { Profile } from '../profile';
import { CommonModule } from '@angular/common';
import { ProfileDetailComponent } from '../profile-detail/profile-detail.component';

@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [CommonModule, ProfileDetailComponent],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.css'
})
export class ProfileComponent {
  profiles: Profile[] = PROFILES;
}
