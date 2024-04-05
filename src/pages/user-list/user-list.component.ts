import { Component, OnInit } from '@angular/core';
import {TableComponent} from "../../components/table/table.component";
import {UsersService} from "../../services/users.service";
import {User} from "../../../types/User";
import {Router} from "@angular/router";
import {faPen, faTrash} from "@fortawesome/free-solid-svg-icons";
import {ModifyUserService} from "../../services/modify-user.service";
import {ModalComponent} from "../../components/modal/modal.component";

@Component({
  selector: 'app-user-list',
  standalone: true,
    imports: [
        TableComponent,
        ModalComponent
    ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
  users = new Array<User>();
  headers: Array<{ key: string; displayName: string }> = [
    {key: 'lastName', displayName: 'Vezetéknév'},
    {key: 'firstName', displayName: 'Keresztnév'},
    {key: 'address', displayName: 'Cím'},
    {key: 'telephone', displayName: 'Telefonszám'},
    {key: 'job', displayName: 'Foglalkozás'},
    {key: 'active', displayName: 'Aktív'},
  ];

  constructor(private usersService: UsersService, private router : Router, private modifyHelper: ModifyUserService) {}
    ngOnInit(): void {
      this.loadTable();
    }

    addNewUser() {
      this.router.navigateByUrl('create-user');
    }

  protected readonly faTrash = faTrash;
  protected readonly faPen = faPen;
  isModalOpen = false;
  selectedUser: User | undefined;

  actionButtonHandler($event: { iconName: string; user: User }) {
    switch ($event.iconName){
      case 'trash':
        this.selectedUser = $event.user;
        this.isModalOpen = true;
        break;
      case 'pen':
        this.modifyHelper.set($event.user);
        this.router.navigateByUrl('modify-user');
        break;
    }
  }

  loadTable() {
    this.usersService.listUsers().subscribe(result => {
      this.users = result['content'].filter((row: User) => row.id);
    });
    this.isModalOpen = false;
  }
}
