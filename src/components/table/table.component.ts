import {Component, Input, OnInit} from '@angular/core';
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {CommonModule} from "@angular/common";
import {ButtonComponent} from "../button/button.component";

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit{
  /**
   * The data of the table
   * */
  @Input()
  data: Array<object> = [];

  /**
   * Array of the buttons needed for the table actions.
   */
  @Input()
  actionButtons: Array<IconDefinition> | null = null;

  headers: Array<string>= [];

  ngOnInit() {
    this.headers = this.getHeaders();
  }

  getHeaders = () => {
    return Object.keys(this.data[0]);
  }

  protected readonly Object = Object;
}
