import { Component, Input } from '@angular/core';
import { Profile } from '../profile';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-detail.component.html',
  styleUrl: './profile-detail.component.css'
})
export class ProfileDetailComponent {
  @Input() profileDetail!: Profile;
}
