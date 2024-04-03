import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent {
  @Input()
  checked = false;

  @Output()
  onCheckedChange = new EventEmitter<boolean>();

  checkedChange() {
    this.checked = ! this.checked;
    this.onCheckedChange.emit(this.checked);
  }
}
