import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { HistoryState } from '../store/states/history.state';
import { Observable } from 'rxjs';
import { HistoryActions } from '../store/actions/history.action';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent {
  constructor(private store: Store) {
    this.store.dispatch(new HistoryActions.HydrateHistory());
  }
  @Select(HistoryState) history$: Observable<any>;

  clearHistory() {
    this.store.dispatch(new HistoryActions.ClearHistory());
  }
}
