import { Routes } from '@angular/router';
import {UserListComponent} from "../pages/user-list/user-list.component";
import {CreateUserComponent} from "../pages/create-user/create-user.component";
import {ModifyUserComponent} from "../pages/modify-user/modify-user.component";

export const routes: Routes = [
  {path: '', component: UserListComponent},
  {path: 'create-user', component: CreateUserComponent},
  {path: 'modify-user', component: ModifyUserComponent},
];
