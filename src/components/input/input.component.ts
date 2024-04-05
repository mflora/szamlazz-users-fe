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

  @Input()
  type: 'text' | 'email' = 'text';
  @Input()
  label = 'Label';
  @Input()
  disabled = false;
  @Input()
  name = '';
  @Input()
  control = new FormControl('');

  @Output()
  valueChange = new EventEmitter<string>;

  ngOnInit(): void {
    this.valueSubject.pipe(debounceTime(500))
      .subscribe(() => {
        this.valueChangeHandler();
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
  valueChangeHandler() {
    this.valueChange.emit(this.value);
  }

  ngOnDestroy(): void {
    this.valueSubject.complete();
  }

  makeFocused($event: any) {
    $event.currentTarget.classList.add('focused');
  }

  makeBlurred($event: any) {
    $event.currentTarget.classList.remove('focused');
  }

  applyContainerBlur($event: any) {
    $event.target.parentNode.classList.remove('focused');
  }
}
