import { Component, Input } from '@angular/core';

type UserStats = {
  location: string;
  health: number;
  currentDay: number;
  lastDay: number;
  rank: string;
  cash: number;
  bank: number;
  debt: number;
};

@Component({
  selector: 'app-user-info',
  imports: [],
  templateUrl: './user-info.html',
  styleUrl: './user-info.scss',
})
export class UserInfo {
  @Input() userInfo!: UserStats;
}
