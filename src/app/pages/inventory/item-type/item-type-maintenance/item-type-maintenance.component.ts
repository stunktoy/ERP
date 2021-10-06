import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, Validators } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ItemTypeService } from 'src/app/services/inventory/item-type.service';
import { SnackBarService } from 'src/app/services/snackbar.service';
import { BottomSheetConfirmComponent } from 'src/app/shared/component/bottomsheet-confirm/bottomsheet-confirm.component';
import { RouteChangeService } from 'src/app/shared/routechange.service';

@Component({
  selector: 'app-item-type-maintenance',
  templateUrl: './item-type-maintenance.component.html',
  styleUrls: ['./item-type-maintenance.component.scss']
})
export class ItemTypeMaintenanceComponent implements OnInit {

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  itemTypeForm:any;

  /** Set default value progress bar : false = hidden */
  displayProgressBar = false;

  constructor(private _routeChangeService: RouteChangeService, private _formBuilder: FormBuilder, private _matBottomSheet: MatBottomSheet, private _snackBarService: SnackBarService, private _itemTypeService: ItemTypeService) { }

  ngOnInit(): void {

    /** Set the breadcrumb value expected output: Bill Of Material / Maintenance. */
    this._routeChangeService.changeMainTitle({
      parentIcon: "apps",
      parentLink: "Item Type",
      activeLink: "Maintenance"
    });

    this.createForm();
  }

  createForm() {
    this.itemTypeForm = this._formBuilder.group({
      ItemTypeCode: new FormControl('', [Validators.required]),     
      Name: new FormControl('', [Validators.required])   
    });
  }

  /** Form submition/post data on api*/
  onSubmit() {

    if(this.itemTypeForm.valid) {

      /** Open bottom sheet confirm component in a form of: Do you really want to proceed with the operation? */
      const bottomSheetRef =  this._matBottomSheet.open(BottomSheetConfirmComponent);

      bottomSheetRef.afterDismissed().subscribe(data => {

        if (data) {
          /** Display progress bar with overlay. */
          this.displayProgressBar = true;

           /** setTimeout is not necessarily needed, just for the presentation of progress bar with overlay.*/
          setTimeout(() => {
            this._itemTypeService.post(this.itemTypeForm.value).subscribe({              
              error: error => {
                
                //this._snackBarService.showError409(error.error.message);

                error.status == 409 ?  this._snackBarService.showError409(error.error.message) : console.error(error);
                
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
