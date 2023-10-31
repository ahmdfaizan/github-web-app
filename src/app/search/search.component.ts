import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngxs/store';
import { Profile } from '../model/profile.model';
import { HistoryActions } from '../store/actions/history.action';
import { GithubService } from '../github.service';
import { HTTPResponse } from '../model/httpResponse.model';
import { ProfileActions } from '../store/actions/profile.action';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  faSearch = faSearch;

  userName: string;
  profile: Profile;

  constructor(private githubService: GithubService, private store: Store) {}
  registerProfileToHistory() {
    if (this.userName) {
      this.githubService.searchUsers(this.userName).subscribe(
        (data) => {
          const { login, name, avatar_url, company, html_url } = <HTTPResponse>(
            data
          );
          this.profile = {
            user_name: login,
            full_name: name,
            profile_pic: avatar_url,
            company_name: company,
            profile_link: html_url,
            isFound: true,
          };
          if (login) {
            this.store.dispatch(new ProfileActions.StoreProfile(this.profile));
            this.store.dispatch(
              new HistoryActions.RegisterProfileToHistory(this.profile)
            );
          }
        },
        (error) => {
          this.profile = { user_name: this.userName, isFound: false };
          this.store.dispatch(new ProfileActions.StoreProfile(this.profile));
          this.store.dispatch(
            new HistoryActions.RegisterProfileToHistory(this.profile)
          );
        }
      );
    } else {
      this.profile = { user_name: this.userName, isFound: false };
      this.store.dispatch(new ProfileActions.StoreProfile(this.profile));
    }
  }

  searchProfile() {}
}
