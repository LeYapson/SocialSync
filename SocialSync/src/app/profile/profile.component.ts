import { Component } from '@angular/core';
import { PROFILES } from './mock-profiles';
import { Profile } from '../interface/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profiles: Profile[] = PROFILES;
}
