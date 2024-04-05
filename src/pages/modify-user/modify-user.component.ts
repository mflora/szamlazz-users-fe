import { Component } from '@angular/core';
import {ModifyUserService} from "../../services/modify-user.service";
import {ButtonComponent} from "../../components/button/button.component";
import {DropdownComponent} from "../../components/dropdown/dropdown.component";
import {InputComponent} from "../../components/input/input.component";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CheckboxComponent} from "../../components/checkbox/checkbox.component";
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";
import {jobOptions} from "../_utils/dropdown-options";
import {User} from "../../../types/User";
import {ModalComponent} from "../../components/modal/modal.component";

@Component({
  selector: 'app-modify-user',
  standalone: true,
  imports: [
    ButtonComponent,
    DropdownComponent,
    InputComponent,
    ReactiveFormsModule,
    CheckboxComponent,
    ModalComponent
  ],
  templateUrl: './modify-user.component.html',
  styleUrl: './modify-user.component.scss'
})
export class ModifyUserComponent {

  modifyUserForm: FormGroup;

  firstName: FormControl;
  lastName: FormControl;
  address: FormControl;
  telephone: FormControl;
  job: FormControl;
  active: FormControl;

  userInfo: User;

  options = jobOptions;

  constructor(private usersService: UsersService, private router: Router, private formBuilder: FormBuilder, private modifyHelper: ModifyUserService) {
    this.userInfo = this.modifyHelper.get()!;

    this.firstName = new FormControl(this.userInfo.firstName, [Validators.required, Validators.minLength(2), Validators.maxLength(64)]);
    this.lastName = new FormControl(this.userInfo.lastName, [Validators.required, Validators.minLength(2), Validators.maxLength(64)]);
    this.address = new FormControl(this.userInfo.address, [Validators.maxLength(128)]);
    this.telephone = new FormControl(this.userInfo.telephone, [Validators.maxLength(128), Validators.pattern('^(?:06|\\+36|0036)\\d{8,9}$')]);
    this.job = new FormControl(this.userInfo.job, Validators.required);
    this.active = new FormControl(this.userInfo.active);

    this.modifyUserForm = this.formBuilder.group({
      firstName: this.firstName,
      lastName: this.lastName,
      address: this.address,
      telephone: this.telephone,
      job: this.job,
      active: this.active
    })

  }

  isModalOpen = false;


  modifyUser() {
    let user = this.modifyUserForm.value;
    user.id = this.userInfo.id;
    this.usersService.updateUser(this.modifyUserForm.value).subscribe(() => this.navigateToUserList());
  }

  openDeleteModal() {
    this.isModalOpen = true;
  }

  navigateToUserList() {
    this.router.navigateByUrl('');
  }
}
