import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { Profile } from '../../model/profile.model';
import { HistoryActions } from '../actions/history.action';

export interface HistoryStateModel {
  history: Profile[];
}

@State<HistoryStateModel>({
  name: 'history',
  defaults: {
    history: [],
  },
})
@Injectable()
export class HistoryState {
  @Action(HistoryActions.RegisterProfileToHistory)
  registerProfileToHistory(
    ctx: StateContext<HistoryStateModel>,
    action: HistoryActions.RegisterProfileToHistory
  ) {
    const state: HistoryStateModel = ctx.getState();
    const filterdState: HistoryStateModel = { // remove duplicates
      history: state.history.filter(
        (item) => item.user_name !== action.payload.user_name
      ),
    };
    ctx.setState({ history: [action.payload, ...filterdState.history] });
    localStorage.setItem(
      'history',
      JSON.stringify([action.payload, ...filterdState.history])
    );
  }
  @Action(HistoryActions.HydrateHistory)
  hydrateHistory(ctx: StateContext<HistoryStateModel>) {
    const profile: Profile[] = JSON.parse(
      localStorage.getItem('history') || ''
    );
    ctx.setState({ history: profile });
  }
  @Action(HistoryActions.ClearHistory)
  clearHistory(ctx: StateContext<HistoryStateModel>) {
    ctx.patchState({ history: [] });
    localStorage.setItem('history', JSON.stringify([]));
  }
}
