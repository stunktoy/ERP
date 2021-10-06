import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroupDirective } from '@angular/forms';
import { CustomerService } from 'src/app/services/sales/customer.service';
import { SnackBarService } from 'src/app/services/snackbar.service';
import { RouteChangeService } from 'src/app/shared/routechange.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetConfirmComponent } from 'src/app/shared/component/bottomsheet-confirm/bottomsheet-confirm.component';

@Component({
  selector: 'app-customer-maintenance',
  templateUrl: './customer-maintenance.component.html',
  styleUrls: ['./customer-maintenance.component.scss']
})
export class CustomerMaintenanceComponent implements OnInit {

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  /** Sales Type radio button values*/
  salesTypes:any = [
    {value: 'Exempt', viewValue: 'Exempt'},
    {value: 'Vatable', viewValue: 'Vatable'},
    {value: 'Zero-Rate', viewValue: 'Zero-Rate'}
  ];

  /** Set default value progress bar : false = hidden */
  displayProgressBar = false;

  initialcustomerMaintenanceForm:any;

  customerMaintenanceForm = this._formBuilder.group({
    Customer: this._formBuilder.group({
      StatusCode: new FormControl('1'),
      CustomerCode: new FormControl('', [Validators.required]),
      DefaultSalesType: new FormControl('Exempt', [Validators.required]),
      DefaultContactNo: new FormControl(''),
      Name: new FormControl('', [Validators.required]),
      DetailDescription: new FormControl(''),
      TIN: new FormControl('')
    }),
    MainAddress: this._formBuilder.group({
      AddressLine1: new FormControl('', [Validators.required]),
      ZipCode: new FormControl(null),
      AddressTypeCode: "Main"
    }),
    DeliveryAddress: this._formBuilder.group({
      AddressLine1: new FormControl(''),
      ZipCode: new FormControl(null),
      AddressTypeCode: "Delivery"
    }),
    InvoiceAddress: this._formBuilder.group({
      AddressLine1: new FormControl(''),
      ZipCode: new FormControl(null),
      AddressTypeCode: "Invoice"
    }),
    ContactPerson: this._formBuilder.group({
      FirstName: new FormControl(''),
      CustomerCode: "",
      MiddleName: new FormControl(''),
      LastName: new FormControl(''),
      PhoneNumber: new FormControl(''),
      EmailAddress: new FormControl('')
    })
});

  /** Textarea element autosize configuration*/
  @ViewChild('autosize', { static: false }) autosize: CdkTextareaAutosize;  

  constructor(private _routeChangeService:RouteChangeService, private _formBuilder:FormBuilder, private _customerService: CustomerService, private _snackBarService: SnackBarService, private _bottomSheet: MatBottomSheet ) {  }

  ngOnInit(): void {
   
    /** Set the breadcrumb value expected output: Customer / Maintenance. */
    this._routeChangeService.changeMainTitle({
      parentIcon: "paid",
      parentLink: "Customer",
      activeLink: "Maintenance"
    });

    /** Set variable that referenced on the default value of customerMaintenanceForm that will be used after submitting for reset. */
    this.initialcustomerMaintenanceForm = this.customerMaintenanceForm.value;
  }

  onSubmit() {   

    if (this.customerMaintenanceForm.valid) {
      
      /** Open bottom sheet confirm component in a form of: Do you really want to proceed with the operation? */
      const bottomSheetRef =  this._bottomSheet.open(BottomSheetConfirmComponent);

      /** Set the [FormGroup]ContactPerson.CustomerCode element value based the from [FormGroup]Customer.CustomerCode element value. */
      this.customerMaintenanceForm.patchValue({
        ContactPerson:({
          CustomerCode: this.customerMaintenanceForm.get('Customer.CustomerCode')?.value
        })
      });
      
      /** Get the return value of bottom sheet upon dismissal, value expected boolen(true or false). */
      bottomSheetRef.afterDismissed().subscribe(data => {
        if (data) {

          /** Display progress bar with overlay. */
          this.displayProgressBar = true;

           /** setTimeout is not necessarily needed, just for the presentation of progress bar with overlay.*/
          setTimeout(() => {
            this._customerService.post(this.customerMaintenanceForm.value).subscribe({              
              error: error => {
                
                console.error(error);
                
                /** Hide progress bar with overlay */
                this.displayProgressBar = false;
              },
              complete: () => {

                /** Reset the validator of form after post and subscribe. */
                this.formGroupDirective.resetForm();

                /** Set the reactive form value to initial */
                this.customerMaintenanceForm.setValue(this.initialcustomerMaintenanceForm);
                
                /** Display snackbar "Success Message". */
                this._snackBarService.showDefaultSuccess();

                /** Hide progress bar with overlay */
                this.displayProgressBar = false;
              }
            })
          }, 1500);
        }
      });
    }
  }
}
