import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
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
}
