import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataTableService } from 'src/app/shared/datatable.service';

@Component({
  selector: 'app-data-table-filter',
  templateUrl: './data-table-filter.component.html',
  styleUrls: ['./data-table-filter.component.scss']
})
export class DataTableFilterComponent implements OnInit {

  @Output() onSearch = new EventEmitter<any>();

  /** List of columns to be display. */
  @Input() columns:any[];

  /** Default selected columns on hide/show select. */
  selectedMultipleValue:any[];

  /** Search criteria model. */
  selectedColumnValue:string = "";

  /** Search criteria model. */
  criteriaColumns:any[];

  /** Search bar data holder. */
  filterValue:string = "";

  constructor(private _dataTableService: DataTableService) { }

  ngOnInit(): void {
    /** Get value only from columns and set on variable. */
    this.selectedMultipleValue = this.columns.filter(a => a.visible == true).map(a => a.value);

    /** Get columns that only has criteria is true */
    this.criteriaColumns = this.columns.filter(a => a.criteria == true);
  }

  toggleColumn(event:any ) {

    if (event.isUserInput) {

      /** Returns object that having a value thrown by the mat-option value. */
      let obj = this.columns.find(x => x.value == event.source.value);

      /** Set the visible value into true/false. */
      obj.visible = event.source.selected;

      /** Send updated column data as observable variable. */
      this._dataTableService.updateDataColumn(this.columns);
    }
  }

  onFilterTable(filterValue: string, selectedColumnValue: string) {
    
    /** Set object property that will send data to parent component that will emit. */
    const filterColumn = {
      filter: filterValue,
      column: selectedColumnValue
    } 

    /** Emit filter action. */
    this.onSearch.emit(filterColumn);
  }
}
