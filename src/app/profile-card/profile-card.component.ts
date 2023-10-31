import { Component, Input } from '@angular/core';
import { Profile } from '../model/profile.model';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent {
  @Input() profile: Profile;
}
