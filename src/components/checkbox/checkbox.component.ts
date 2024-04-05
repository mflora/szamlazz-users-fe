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
  @Input()
  checked = false;
  @Input()
  label= '';
  @Input()
  control = new FormControl(false);

  @Output()
  onCheckedChange = new EventEmitter<boolean>();

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
