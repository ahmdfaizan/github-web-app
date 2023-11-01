import { Profile } from '../../model/profile.model';

export namespace HistoryActions {
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
