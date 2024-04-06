import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent {
  /**
   * Sets the checkbox checked or unchecked
   * */
  @Input()
  checked = false;
  /**
   * The label which appears nex to the checkbox.
   * */
  @Input()
  label= '';
  /**
   * FormControl for the checkbox to use ReactiveForms.
   * */
  @Input()
  control = new FormControl(false);

  /**
   * Event firing when the checked value changes.
   * */
  @Output()
  onCheckedChange = new EventEmitter<boolean>();

  /**
   * Handler function for the checked value change.
   * */
  checkedChange() {
    this.checked = ! this.checked;
    this.onCheckedChange.emit(this.checked);
  }

  get value(): boolean{
    return this.control.value!;
  }

  set value(val: boolean) {
    this.control.setValue(val);
    this.onCheckedChange.emit(val);
  }
}
