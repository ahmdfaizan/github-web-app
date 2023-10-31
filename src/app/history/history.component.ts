import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { HistoryState } from '../store/states/profile.state';
import { Observable } from 'rxjs';
import { ProfileActions } from '../store/actions/profile.action';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  constructor(private store: Store) {
    this.store.dispatch(new ProfileActions.HydrateHistory());
  }
  @Select(HistoryState) history$: Observable<any>;

  clearHistory() {
    this.store.dispatch(new ProfileActions.ClearHistory());
  }
}
