import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { datafilter } from "../models/datafilter";

@Injectable({
    providedIn: 'root'
})

export class DataTableService {

  private dataFilter = new BehaviorSubject<datafilter>(<any>[]);

  private dataTable = new BehaviorSubject(<any>[]);

  private dataColumn = new BehaviorSubject(<any>[]);

  private dataPaging = new BehaviorSubject({});

  dataFilter$ = this.dataFilter.asObservable();
  
  dataTable$ = this.dataTable.asObservable();

  dataColumn$ = this.dataColumn.asObservable();

  dataPaging$ = this.dataPaging.asObservable();


  updateDataTable(dataTable: any) {
    this.dataTable.next(dataTable)
  }

  updateDataPaging(dataPaging:any){
    this.dataPaging.next(dataPaging)
  }

  updateDataFilter(dataFilter:any){
    this.dataFilter.next(dataFilter)
  }

  updateDataColumn(dataColumn:any){
    this.dataColumn.next(dataColumn)
  }
}