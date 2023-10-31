import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { Profile } from 'src/app/model/profile.model';
import { ProfileActions } from '../actions/profile.action';

export interface ProfileStateModel {
  profile: Profile;
  
}

@State<ProfileStateModel>({
  name: 'profile',
  defaults: {
    profile: {},
  },
})
@Injectable()
export class ProfileState {
  @Action(ProfileActions.StoreProfile)
  storeProfile(
    ctx: StateContext<ProfileStateModel>,
    action: ProfileActions.StoreProfile
  ) {
    console.log("profile 1")
    const state: ProfileStateModel = ctx.getState();
    ctx.setState({
      profile: action.payload,
    });
  }
}
