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
   * Emits an event when one of the action buttons are clicked.
   */
  @Output()
  mainButtonClicked = new EventEmitter();

  @Output()
  actionButtonClicked = new EventEmitter<{ iconName: string, user: User }>();

  @Input()
  headers: Array<{ key: string, displayName: string }>= [];

  headerKeys = new Array<string>();
  pageCounter = 1;
  shownTableData: Array<object> = [];

  actionButtonHandler(iconName: string, user: object){
    this.actionButtonClicked.emit({iconName: iconName, user: user as User});
  }

  ngOnChanges() {
    this.calculateTable();
  }

  ngOnInit(): void {
    if(!this.headers) {
      this.headers = this.getHeaders();
    } else {
      this.headerKeys = this.headers.map(header => {
        return header.key;
      });
    }
  }

  getHeaders = () => {
    this.headerKeys = Object.keys(this.data[0]);
    return Object.keys(this.data[0] ?? []).map(item =>{
      return {key: item, displayName: item}
    });
  }

  isBoolean = (value: any) =>  {return typeof value === 'boolean'}



  turnPage(pageNumber: number) {
    this.pageCounter += pageNumber;
    this.calculateTable();
  }

  calculateTable() {
    if(this.data.length !== 0 && this.pageCounter > Math.ceil(this.data.length / 5)) {
      --this.pageCounter;
    }

    const starterIndex = (this.pageCounter -1) * 5;
    this.shownTableData = this.data.slice(starterIndex, starterIndex + 5);
  }

  findCell(headerCell: string, row: any): string {
    return row[headerCell];
  }

  protected readonly Math = Math;
  protected readonly faCircleCheck = faCircleCheck;
  protected readonly faCircleXmark = faCircleXmark;
  protected readonly faPlus = faPlus;
  protected readonly faFaceSadCry = faFaceSadCry;
  protected readonly faChevronLeft = faChevronLeft;
  protected readonly faChevronRight = faChevronRight;
}
