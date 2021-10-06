import { Component, OnInit, ViewChild } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { DataTableComponent } from 'src/app/layout/data-table/data-table.component';
import { BillOfMaterialService } from 'src/app/services/inventory/bill-of-material.service';
import { DataTableService } from 'src/app/shared/datatable.service';
import { RouteChangeService } from 'src/app/shared/routechange.service';

@Component({
  selector: 'app-bill-of-material-record',
  templateUrl: './bill-of-material-record.component.html',
  styleUrls: ['./bill-of-material-record.component.scss']
})
export class BillOfMaterialRecordComponent implements OnInit {

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
    { value: "billOfMaterialId", viewValue: "ID", visible:true },
    { value: "itemTypeCode", viewValue: "Type", visible:true },
    { value: "customerCode", viewValue: "Customer", visible:true, criteria: true },
    { value: "revisionNo", viewValue: "Revision", visible:true },
    { value: "partNumber", viewValue: "Part No", visible:true, criteria: true },
    { value: "partName", viewValue: "Part Name", visible:true, criteria: true },
    { value: "classificationCode", viewValue: "Classification", visible:true, criteria: true },
    { value: "statusCode", viewValue: "Status", visible:true }
   ];

  constructor(private _routeChangeService: RouteChangeService, private _billOfMaterialService: BillOfMaterialService, private _dataTableService: DataTableService) { }

  ngOnInit(): void {
    this._routeChangeService.changeMainTitle({
      parentIcon: "build",
      parentLink: "Bill Of Material",
      activeLink: "Record"
    });

    /** Send and set columns as observable*/
    this._dataTableService.updateDataColumn(this.columns);

    /** Retrieve data from service api that will return list of customers. */
    this._billOfMaterialService.getPaginated().pipe(      
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
    this._billOfMaterialService.getPaginated(event).pipe(      
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

    this._billOfMaterialService.getPaginated(this.filterParameter).pipe(      
      map((result) => { 
        this._dataTableService.updateDataTable(result.body);
        this._dataTableService.updateDataPaging(JSON.parse(result.headers.get('paging')!));
      })
    ).subscribe();    
  }

}
