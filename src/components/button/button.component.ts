import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import { IconDefinition} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    NgClass,
    FaIconComponent,
    NgIf
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  /**
   * The button's label. If empty, an icon button will appear.
   * */
  @Input()
  label = '';

  /**
   * Definition of the FontAwesomeIcon. Accepts free FontAwesome icons. Find all the icons here: https://fontawesome.com/icons
   * */
  @Input()
  iconDefinition:IconDefinition | null = null;

  /**
   * The color schema of the button
   */
  @Input()
  buttonStyle: 'primary' | 'secondary' | 'secondary-ghost' = 'primary'

  /**
   * Specifies whether is the button disabled or not.
   */
  @Input()
  disabled = false;

  /**
   * Basic HTML <button> tag type.
   */
  @Input()
  type: 'button' | 'submit' | 'reset' = 'button'

  /**
   * Click event for the button.
   * */
  @Output()
  onClick = new EventEmitter();
}
