import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {faChevronLeft, faChevronRight, faPlus, IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {CommonModule} from "@angular/common";
import {ButtonComponent} from "../button/button.component";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faCircleCheck, faCircleXmark, faFaceSadCry} from "@fortawesome/free-regular-svg-icons";
import {User} from "../../../types/User";

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    FaIconComponent
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnChanges, OnInit {
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
  /**
   * Defines which of the columns should be displayed. If unset, it will contain all the columns of the data array's firs item.
   */
  @Input()
  headers: Array<{ key: string, displayName: string }>= [];

  /**
   * Event firing when one of the action buttons are clicked.
   */
  @Output()
  mainButtonClicked = new EventEmitter();
  /**
   * Event firing when one of the action buttons are clicked.
   */
  @Output()
  actionButtonClicked = new EventEmitter<{ iconName: string, user: User }>();
  /**
   * Keys of the headers array.
   */
  headerKeys = new Array<string>();
  /**
   * Index of the current page.
   */
  pageCounter = 1;
  /**
   * Currently displayed subset of the data array.
   */
  shownTableData: Array<object> = [];

  /**
   * Handler function for click any of the action buttons
   * */
  actionButtonHandler(iconName: string, user: object){
    this.actionButtonClicked.emit({iconName: iconName, user: user as User});
  }

  ngOnChanges() {
    this.calculateTable();
  }

  ngOnInit(): void {
    if(this.headers.length === 0) {
      this.headers = this.getHeaders();
    } else {
      this.headerKeys = this.headers.map(header => {
        return header.key;
      });
    }
  }

  /**
   * Helper function which helps calculate the headers array if it's unset by the parent component
   * */
  getHeaders = () => {
    this.headerKeys = Object.keys(this.data[0]);
    return Object.keys(this.data[0] ?? []).map(item =>{
      return {key: item, displayName: item}
    });
  }

  /**
   * Helper function which helps decide whether a value's type is boolean or not.
   * */
  isBoolean = (value: any) =>  {return typeof value === 'boolean'}

  /**
   * Helper function for turning to the next or the previous page of the table.
   * */
  turnPage(pageNumber: number) {
    this.pageCounter += pageNumber;
    this.calculateTable();
  }

  /**
   * Helper function which helps to fill the shownTableData property.
   * */
  calculateTable() {
    if(this.data.length !== 0 && this.pageCounter > Math.ceil(this.data.length / 5)) {
      --this.pageCounter;
    }

    const starterIndex = (this.pageCounter -1) * 5;
    this.shownTableData = this.data.slice(starterIndex, starterIndex + 5);
  }

  /**
   * Helper function which returns the cell by headerKey
   * */
  findCell(headerCell: string, row: any): string {
    return row[headerCell];
  }

  /**
   * Icon for the table
   * */
  protected readonly Math = Math;
  /**
   * Icon for the table
   * */
  protected readonly faCircleCheck = faCircleCheck;
  /**
   * Icon for the table
   * */
  protected readonly faCircleXmark = faCircleXmark;
  /**
   * Icon for the table
   * */
  protected readonly faPlus = faPlus;
  /**
   * Icon for the table
   * */
  protected readonly faFaceSadCry = faFaceSadCry;
  /**
   * Icon for the table
   * */
  protected readonly faChevronLeft = faChevronLeft;
  /**
   * Icon for the table
   * */
  protected readonly faChevronRight = faChevronRight;
}
