import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { CustomerService } from 'src/app/services/sales/customer.service';
import { RouteChangeService } from 'src/app/shared/routechange.service';

@Component({
  selector: 'app-customer-order-maintenance',
  templateUrl: './customer-order-maintenance.component.html',
  styleUrls: ['./customer-order-maintenance.component.scss']
})
export class CustomerOrderMaintenanceComponent implements OnInit {

  dataSource = new BehaviorSubject<AbstractControl[]>([]);

  displayColumns = ['from', 'to'];

  rows: FormArray = this._formBuilder.array([]);  

  form: FormGroup = this._formBuilder.group({ 'dates': this.rows });

  customerLists:any[];

  customerCode:string;

  constructor(private _routeChangeService: RouteChangeService, private _customerService: CustomerService, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {

     /** Set the breadcrumb value expected output: Customer / Maintenance. */
     this._routeChangeService.changeMainTitle({
      parentIcon: "paid",
      parentLink: "Customer Order",
      activeLink: "Maintenance"
    });

    /** Get the list of customer that status is active.  */
    this._customerService.getPaginated({pageSize: 999}).pipe(      
      map((result:any) => { 
        this.customerLists = result.body!.filter((x: any) => {
          return x.statusCode == "1"
        });
      })
    ).subscribe(); 

  }

}
