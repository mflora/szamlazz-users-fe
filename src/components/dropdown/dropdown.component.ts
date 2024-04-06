import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FaIconComponent
  ],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  @Input()
  label = '';
  @Input()
  options = new Array<{value: string, displayName: string}>();

  @Output()
  onSelectionChange = new EventEmitter<string>();

  @Input()
  control = new FormControl('');

  isModalOpen = false;
  selectedValueDisplay = '';

  selectionChange(value: string) {
    this.onSelectionChange.emit(value);
  }

  get value(): string{
    return this.control.value!;
  }

  set value(val: string) {
    this.control.setValue(val);
    this.onSelectionChange.emit(val);
  }

  protected readonly faChevronDown = faChevronDown;

  toggleDropdown() {
    this.isModalOpen = !this.isModalOpen;
  }

  setDropdownValue(option: { value: string; displayName: string }) {
    this.selectedValueDisplay = option.displayName;
    this.value = option.value;
    this.isModalOpen = false;
  }
}
