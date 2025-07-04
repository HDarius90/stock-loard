import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header";
import { UserInfo } from "./user-info/user-info";
import { DUMMY_USER } from './dummy-user';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, UserInfo],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'stock-loard';
  user = DUMMY_USER;
}
