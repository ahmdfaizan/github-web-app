import { Component } from '@angular/core';
import { HistoryState } from '../store/states/profile.state';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Profile } from '../model/profile.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  @Select(HistoryState) history$: Observable<any>;
}
