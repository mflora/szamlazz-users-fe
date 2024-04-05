import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ButtonComponent} from "../button/button.component";
import {CommonModule} from "@angular/common";
import {User} from "../../../types/User";
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input()
  isOpen = false;
  @Input()
  modalData: User | undefined;
  @Output()
  onDelete = new EventEmitter();


  constructor(private userService: UsersService, private router: Router) {}
  onClose() {
    this.isOpen = false;
  }

  deleteClicked() {
    if(this.modalData) {
      this.userService.deleteUser(this.modalData.id!).subscribe(() => {
        this.onDelete.emit();
        this.onClose();
        this.router.navigateByUrl('');
      });
    }
  }
}
