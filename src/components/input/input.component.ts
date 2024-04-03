import {
  Component,
  EventEmitter,
  Input, OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {BehaviorSubject, debounceTime,} from "rxjs";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent implements OnInit, OnDestroy {

  private valueSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  @Input()
  type: 'text' | 'email' = 'text';
  @Input()
  value = '';
  @Input()
  label = 'Label';
  @Input()
  disabled = false;
  @Input()
  minLength = 0;
  @Input()
  maxLength = 128;
  @Input()
  required = false;

  @Output()
  onValueChange = new EventEmitter<string>;

  ngOnInit(): void {
    this.valueSubject.pipe(debounceTime(500))
      .subscribe(() => {
        this.valueChangeHandler();
      });
  }

  onInput(){
    this.valueSubject.next(this.value);
  }
  valueChangeHandler() {
    this.onValueChange.emit(this.value);
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

  asd($event: any) {
    $event.target.parentNode.classList.remove('focused');
  }
}
