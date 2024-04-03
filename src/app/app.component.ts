import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UsersService} from "../services/users.service";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'users-fe';

  constructor(users: UsersService) {
    users.saveUser({firstName: 'Flora', lastName: 'Mikola', active:true, job: 'KERTESZ', address: '7800 Siklos, Harkanyi ut 29/a', telephone: '+36206667320'})
      .subscribe(data => console.log(data));
    console.log(users.listUsers().subscribe());
  }
}
