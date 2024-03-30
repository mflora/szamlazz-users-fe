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
   * This string will appear as the button's label. If empty, an icon button will appear.
   * */
  @Input()
  label = '';

  /**
   * Click event for the button.
   * */
  @Output()
  onClick = new EventEmitter();

  /**
   * Name of the FontAwesomeIcon you can find the icons here: https://fontawesome.com/icons
   * */
  @Input()
  iconName:IconDefinition | null = null;

  /**
   * The color schema of the button
   */
  @Input()
  buttonType: 'primary' | 'secondary' | 'secondary-ghost' = 'primary'


}
