import { Profile } from 'src/app/model/profile.model';

export namespace ProfileActions {
  export class RegisterProfileToHistory {
    static readonly type = `[History] Add`;
    constructor(public payload: Profile) {}
  }
  export class HydrateHistory {
    static readonly type = `[History] Set`;
    constructor() {}
  }
  export class ClearHistory {
    static readonly type = `[History] Delete`;
    constructor() {}
  }
}
