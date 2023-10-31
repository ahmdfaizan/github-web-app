import { Profile } from 'src/app/model/profile.model';

export namespace ProfileActions {
  export class StoreProfile {
    static readonly type = `[Profile] Store`;
    constructor(public payload: Profile) {}
  }
}
