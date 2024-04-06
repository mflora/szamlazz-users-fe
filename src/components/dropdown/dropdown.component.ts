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
  /**
   * Label for the dropdown component.
   * */
  @Input()
  label = '';
  /**
   * The list of selectable options for the dropdown.
   * */
  @Input()
  options = new Array<{value: string, displayName: string}>();
  /**
   * FormControl for the dropdown to use ReactiveForms.
   * */
  @Input()
  control = new FormControl('');

  /**
   * Event firing when the selected value changes.
   * */
  @Output()
  onSelectionChange = new EventEmitter<string>();

  /**
   * Specifies whether the dropdown is open or not.
   * */
  isDropdownOpen = false;
  /**
   * The displayValue of the selected value.
   * */
  selectedValueDisplay = '';

  get value(): string{
    return this.control.value!;
  }

  set value(val: string) {
    this.control.setValue(val);
    this.onSelectionChange.emit(val);
  }

  /**
   * Toggling isModalOpen's value.
   * */
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  /**
   * Setting the selected value of the dropdown then closes the option list.
   * */
  setDropdownValue(option: { value: string; displayName: string }) {
    this.selectedValueDisplay = option.displayName;
    this.value = option.value;
    this.isDropdownOpen = false;
  }

  /**
   * Icon for the dropdown.
   * */
  protected readonly faChevronDown = faChevronDown;
}
