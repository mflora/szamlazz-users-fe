import { Injectable } from '@angular/core';
import {User} from "../../types/User";

@Injectable({
  providedIn: 'root'
})
export class ModifyUserService {
  user: User | undefined = undefined;

  constructor() { }

  set (user: User){
    this.user = user;
  }

  get () {
    return this.user;
  }
}
