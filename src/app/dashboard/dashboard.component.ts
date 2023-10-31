import { Component } from '@angular/core';
import { HistoryState } from '../store/states/history.state';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Profile } from '../model/profile.model';
import { ProfileState } from '../store/states/profile.state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  @Select(HistoryState) history$: Observable<any>;
  @Select(ProfileState) profile$: Observable<any>;
}
