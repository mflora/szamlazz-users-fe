import {Component, Input, OnInit} from '@angular/core';
import {faChevronLeft, faChevronRight, faPlus, IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {CommonModule} from "@angular/common";
import {ButtonComponent} from "../button/button.component";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faFaceSadCry} from "@fortawesome/free-regular-svg-icons";

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
  pageCounter = 0;
  shownTableData: Array<object> = [];

  ngOnInit() {
    this.headers = this.getHeaders();
    this.calculateTable();
  }

  getHeaders = () => {
    return Object.keys(this.data[0]);
  }

  isBoolean = (value: any) =>  {return typeof value === 'boolean'}

  protected readonly Object = Object;
  protected readonly faPlus = faPlus;
  protected readonly faFaceSadCry = faFaceSadCry;
  protected readonly faChevronLeft = faChevronLeft;
  protected readonly faChevronRight = faChevronRight;

  turnPage(pageNumber: number) {
    this.pageCounter += pageNumber;
    this.calculateTable();
  }

  calculateTable() {
    const starterIndex = this.pageCounter * 5;
    this.shownTableData = this.data.slice(starterIndex, starterIndex + 5);
  }

  protected readonly Math = Math;
}
