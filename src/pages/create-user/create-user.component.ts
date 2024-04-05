import {Component} from '@angular/core';
import {InputComponent} from "../../components/input/input.component";
import {ButtonComponent} from "../../components/button/button.component";
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {DropdownComponent} from "../../components/dropdown/dropdown.component";
import {jobOptions} from "../_utils/dropdown-options";
import {ModalComponent} from "../../components/modal/modal.component";

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [
    InputComponent,
    ButtonComponent,
    ReactiveFormsModule,
    DropdownComponent,
    ModalComponent
  ],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent{
  createUserForm: FormGroup;

  firstName = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(64)]);
  lastName = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(64)]);
  address = new FormControl('', [Validators.maxLength(128)]);
  telephone = new FormControl('', [Validators.maxLength(128), Validators.pattern('^(?:06|\\+36|0036)\\d{8,9}$')]);
  job = new FormControl('', Validators.required);

  options = jobOptions;

  constructor(private usersService: UsersService, private router: Router, private formBuilder: FormBuilder) {
    this.createUserForm = this.formBuilder.group({
      firstName: this.firstName,
      lastName: this.lastName,
      address: this.address,
      telephone: this.telephone,
      job: this.job
    })
  }

  navigateToUserList() {
    this.router.navigateByUrl('');
  }

  createUser() {
    let user = this.createUserForm.value;
    user.active = true;
    this.usersService.saveUser(user).subscribe(() => this.navigateToUserList());
  }
}
