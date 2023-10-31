import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngxs/store';
import { Profile } from '../model/profile.model';
import { ProfileActions } from '../store/actions/profile.action';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  faSearch = faSearch;
  constructor(private store: Store) {}
  registerProfileToHistory() {
    const profile: Profile = {
      user_name: 'Faizan Ahmad Zargar',
      profile_pic:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUELL2iTMsxkbPaMrAKaxl4cHbbF80CsKek4lGOzlR6A&s',
      profile_link: 'https://www.linkedin.com/in/faizan-zargar-b79b3a1a0/',
    };

    this.store.dispatch(new ProfileActions.RegisterProfileToHistory(profile));
  }

  searchProfile() {}
}
