import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { Profile } from 'src/app/model/profile.model';
import { ProfileActions } from '../actions/profile.action';

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
  @Action(ProfileActions.RegisterProfileToHistory)
  registerProfileToHistory(
    ctx: StateContext<HistoryStateModel>,
    action: ProfileActions.RegisterProfileToHistory
  ) {
    const state: HistoryStateModel = ctx.getState();
    ctx.setState({ history: [...state.history, action.payload] });
    localStorage.setItem(
      'history',
      JSON.stringify([...state.history, action.payload])
    );
  }
  @Action(ProfileActions.HydrateHistory)
  hydrateHistory(ctx: StateContext<HistoryStateModel>) {
    const profile: Profile[] = JSON.parse(
      localStorage.getItem('history') || ''
    );
    ctx.setState({ history: profile });
  }
  @Action(ProfileActions.ClearHistory)
  clearHistory(ctx: StateContext<HistoryStateModel>) {
    ctx.patchState({ history: [] });
    localStorage.setItem('history', JSON.stringify([]));
  }
}
