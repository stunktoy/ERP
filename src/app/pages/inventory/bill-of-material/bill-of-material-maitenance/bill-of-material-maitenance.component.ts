import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, Validators } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { map } from 'rxjs/operators';
import { CustomerService } from 'src/app/services/sales/customer.service';
import { BillOfMaterialService } from 'src/app/services/inventory/bill-of-material.service';
import { ClassificationService } from 'src/app/services/inventory/classifcation.service';
import { ItemTypeService } from 'src/app/services/inventory/item-type.service';
import { SnackBarService } from 'src/app/services/snackbar.service';
import { BottomSheetConfirmComponent } from 'src/app/shared/component/bottomsheet-confirm/bottomsheet-confirm.component';
import { RouteChangeService } from 'src/app/shared/routechange.service';

@Component({
  selector: 'app-bill-of-material-maitenance',
  templateUrl: './bill-of-material-maitenance.component.html',
  styleUrls: ['./bill-of-material-maitenance.component.scss']
})
export class BillOfMaterialMaitenanceComponent implements OnInit {

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  customerLists:any[];

  itemTypeLists:any[];

  classificationLists:any[];

  billOfMaterialForm:any;

  /** Set default value progress bar : false = hidden */
  displayProgressBar = false;

  constructor(private _routeChangeService: RouteChangeService, private _formBuilder: FormBuilder, private _customerService: CustomerService, 
              private _itemTypeService: ItemTypeService, private _matBottomSheet: MatBottomSheet, private _snackBarService: SnackBarService, 
              private _billOfMaterialService: BillOfMaterialService, private _classifcationService: ClassificationService ) { }

  ngOnInit(): void {
    
    /** Set the breadcrumb value expected output: Bill Of Material / Maintenance. */
    this._routeChangeService.changeMainTitle({
      parentIcon: "build",
      parentLink: "Bill Of Material",
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

    /** Get the list of classifcation that status is active.  */
    this._classifcationService.get().pipe(      
      map((result:any) => { 
        this.classificationLists = result.filter((x: any) => {
          return x.statusCode == "1"
        });
      })
    ).subscribe(); 

    /** Get the list of item type that status is active.  */
    this._itemTypeService.getPaginated().pipe(      
      map((result:any) => { 
        this.itemTypeLists = result.body!.filter((x: any) => {
          return x.statusCode == 1
        });
      })
    ).subscribe(); 

    this.createForm();
  }

  /** Create initial state of the form group. */
  createForm() {
    this.billOfMaterialForm = this._formBuilder.group({
      ItemTypeCode: new FormControl('', [Validators.required]),     
      CustomerCode: new FormControl('', [Validators.required]),     
      RevisionNo: new FormControl('REV-1', [Validators.required]),     
      PartNumber: new FormControl('', [Validators.required]),     
      PartName: new FormControl('', [Validators.required]),     
      Specification: new FormControl('Ø'),     
      ClassificationCode: new FormControl(''),     
      SpeedPerMinute: new FormControl(0),     
      Usage: new FormControl(0),     
    });
  }
  
  /** Form submition/post data on api*/
  onSubmit() {
    if (this.billOfMaterialForm.valid) {

       /** Open bottom sheet confirm component in a form of: Do you really want to proceed with the operation? */
       const bottomSheetRef =  this._matBottomSheet.open(BottomSheetConfirmComponent);

      bottomSheetRef.afterDismissed().subscribe(data => {
        if (data) {

          /** Display progress bar with overlay. */
          this.displayProgressBar = true;

           /** setTimeout is not necessarily needed, just for the presentation of progress bar with overlay.*/
          setTimeout(() => {
            this._billOfMaterialService.post(this.billOfMaterialForm.value).subscribe({              
              error: error => {
                
                console.error(error);
                
                /** Hide progress bar with overlay */
                this.displayProgressBar = false;
              },
              complete: () => {

                /** Return to initial state of the bill of material form. */
                this.createForm();
                
                /** Reset the validator of form after post and subscribe. */
                this.formGroupDirective.resetForm();
                
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
