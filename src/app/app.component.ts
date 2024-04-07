import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {routes} from "./app.routes";
import {filter, map} from "rxjs";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import { faUser } from '@fortawesome/free-regular-svg-icons';
import {faBook} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FaIconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  public currentTitle = '';
  constructor(protected router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let childRoute = this.router.routerState.snapshot.root;
        while (childRoute.firstChild) {
          childRoute = childRoute.firstChild;
        }
        return childRoute.data['title'];
      })
    ).subscribe((title: string) => {
      this.currentTitle = title;
    });
  }

  protected readonly routes = routes;
  protected readonly faUser = faUser;
  protected readonly faBook = faBook;
}

