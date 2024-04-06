import {
  Component,
  EventEmitter,
  Input, OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {BehaviorSubject, debounceTime,} from "rxjs";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgClass,
    NgIf
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent implements OnInit, OnDestroy {

  private valueSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  /**
   * Basic HTML <input> tag type.
   */
  @Input()
  type: 'text' | 'email' = 'text';
  /**
   * The input's label.
   * */
  @Input()
  label = 'Label';
  /**
   * Specifies whether is the input disabled or not.
   */
  @Input()
  disabled = false;
  /**
   * name of the input.
   */
  @Input()
  name = '';
  /**
   * FormControl for the input to use ReactiveForms.
   * */
  @Input()
  control = new FormControl('');

  /**
   * Event firing when the input value changes.
   * */
  @Output()
  valueChange = new EventEmitter<string>;

  ngOnInit(): void {
    this.valueSubject.pipe(debounceTime(500))
      .subscribe(() => {
        this.valueChange.emit(this.value);
      });
  }

  get value(): string{
    return this.control.value!;
  }

  set value(val: string) {
    this.control.setValue(val);
    this.valueChange.emit(val);
  }

  onInput(){
    this.valueSubject.next(this.value);
  }

  ngOnDestroy(): void {
    this.valueSubject.complete();
  }

  /**
   * Helper function for styling purposes
   * */
  makeFocused($event: any) {
    $event.currentTarget.classList.add('focused');
  }
  /**
   * Helper function for styling purposes
   * */
  makeBlurred($event: any) {
    $event.currentTarget.classList.remove('focused');
  }
  /**
   * Helper function for styling purposes
   * */
  applyContainerBlur($event: any) {
    $event.target.parentNode.classList.remove('focused');
  }
}
