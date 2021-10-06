import { Component, OnInit, ViewChild } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { DataTableComponent } from 'src/app/layout/data-table/data-table.component';
import { ClassificationService } from 'src/app/services/inventory/classifcation.service';
import { DataTableService } from 'src/app/shared/datatable.service';
import { RouteChangeService } from 'src/app/shared/routechange.service';

@Component({
  selector: 'app-classification-record',
  templateUrl: './classification-record.component.html',
  styleUrls: ['./classification-record.component.scss']
})
export class ClassificationRecordComponent implements OnInit {

  /** Use to refresh child component datatable. */
  @ViewChild(DataTableComponent, { static: false }) dataTable:any;

  /** Variable that will hold for the httpParameter of customer service.*/
  filterParameter:any = {
    pageSize: 15,
    pageNumber: 1,
    filterValue: "",
    columnValue: ""
  };

  /** Variable that will hold the http get result data. */
  tableData:any;
 
  /** Variable that will hold the paging data from api. */
  pagingData:any;

  /** Default columns for data table filter and data table column header. */
  columns:any[] = [
    { value: "classificationId", viewValue: "ID", visible:true },
    { value: "classificationCode", viewValue: "Code", visible:true, criteria: true },
    { value: "name", viewValue: "Name", visible:true, criteria: true },
    { value: "dateCreated", viewValue: "Date Created", visible:true },
    { value: "createdBy", viewValue: "Created By", visible:true },
    { value: "statusCode", viewValue: "Status", visible:true }
  ];

  constructor(private _routeChangeService: RouteChangeService, private _dataTableService: DataTableService, private _classificationService: ClassificationService) { }

  ngOnInit(): void {
    this._routeChangeService.changeMainTitle({
      parentIcon: "apps",
      parentLink: "Item Type",
      activeLink: "Record"
    });

    this._dataTableService.updateDataColumn(this.columns);

     /** Retrieve data from service api that will return list of customers. */
    this._classificationService.getPaginated().pipe(      
      map((result) => { 
        this._dataTableService.updateDataTable(result.body);

        this._dataTableService.updateDataPaging(JSON.parse(result.headers.get('paging')!));

        this.tableData = result.body;

        this.pagingData = JSON.parse(result.headers.get('paging')!);
      }),
      catchError(error => throwError(error))
    ).subscribe();    
  }


  pagingEvent(event:any) {

    /** Set value for event.filterValue based on search bar*/
    event.filterValue = this.filterParameter.filterValue;

    /** Retrieve data from service api that will return list of customers with the paging parameter. */
    this._classificationService.getPaginated(event).pipe(      
      map((result) => { 
        this._dataTableService.updateDataTable(result.body);

        this._dataTableService.updateDataPaging(JSON.parse(result.headers.get('paging')!));
      })
    ).subscribe();    
  }

  filterRecord(filterValue:any) {

    /** Set value of filter value from data-table-filter component input value.  */
    this.filterParameter.filterValue = filterValue.filter;

    /** Set value of column that will be filter based on the selected column from data-table-filter component.  */
    this.filterParameter.columnValue = filterValue.column;

    this._classificationService.getPaginated(this.filterParameter).pipe(      
      map((result) => { 
        this._dataTableService.updateDataTable(result.body);

        this._dataTableService.updateDataPaging(JSON.parse(result.headers.get('paging')!));
      })
    ).subscribe();    
  }

}
