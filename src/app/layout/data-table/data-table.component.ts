import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { datatableitem } from 'src/app/models/datatable';
import { DataTableService } from 'src/app/shared/datatable.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})

export class DataTableComponent implements AfterViewInit, OnInit {
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<datatableitem>;

  @Input() tableData:any;
  @Input() pagingData:any;
  @Input() serviceName:string;
  @Input() columns:any[];

  @Output() pagingEvent = new EventEmitter();

  pagingParameter:any;

  dataSource:any;

  columnValue:any;

  /** Set of value in a form of array that will hold the table header value. */
  columnViewValue:any;

  /** Set of value in a form of array that will hold the "visible" property. */
  columnDisplay:any[];

  constructor(private _dataTableService: DataTableService) { }

  ngOnInit() {
    this._dataTableService.dataColumn$.subscribe(dataColumn => {

      this.columnDisplay = dataColumn 

      /** Filtering only columns that should be visible on the display.*/
      let result = this.columnDisplay.filter(x => {
        return x.visible === true
      })
      
      /** Mapping columns getting value property. */
      this.columnValue = result.map(a => a.value)

      /** Mapping columns getting viewValue only and assign the object or convert array into object. */
      this.columnViewValue = {...result.map(a => a.viewValue)};

    });

    this.dataSource = new MatTableDataSource(this.tableData);
  }

  ngAfterViewInit(): void {

    this._dataTableService.dataPaging$.subscribe(dataPaging => this.pagingData = dataPaging );    

    this.dataSource.sort = this.sort;

    this._dataTableService.dataTable$.subscribe(result => this.table.dataSource = new MatTableDataSource(result));

  }

  onPaginateChange(event: PageEvent) {

    /** Retrieve the current page index after the page event. */
    let pageIndex = event.pageIndex + 1;
    
    /** Retrieve the page size index after the page event. */
    let pageSize = event.pageSize;

    /** Set the variable for parameter that will emit by parent. */
    this.pagingParameter = {
      pageNumber: pageIndex,
      pageSize: pageSize
    }

    this.pagingEvent.emit(this.pagingParameter);

    /** Set the variable.asObservable of data source from service. */
    this._dataTableService.dataTable$.subscribe(result => this.table.dataSource = new MatTableDataSource(result));

    /** Set the variable.asObservable of data paging from service. */
    this._dataTableService.dataPaging$.subscribe(result => this.pagingData = result);
  }  
}
